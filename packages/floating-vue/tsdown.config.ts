import { copyFile, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { defineConfig } from 'tsdown'
import ts from 'typescript'

/**
 * TypeScript's declaration emit orders the members of inferred object types
 * (notably the `DefineComponent<ExtractPropTypes<…>>` expansions) and the arms
 * of unions non-deterministically, so the same source yields different `.d.ts`
 * output run-to-run. Recursively sort those members and union arms by their
 * printed text to make the emitted declarations deterministic.
 */
function sortDeclarations (code: string): string {
  const source = ts.createSourceFile('dts.ts', code, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed, removeComments: false })
  const key = (node: ts.Node): string => printer.printNode(ts.EmitHint.Unspecified, node, source)

  const transform: ts.TransformerFactory<ts.SourceFile> = context => root => {
    const visit = (node: ts.Node): ts.Node => {
      node = ts.visitEachChild(node, visit, context)
      if (ts.isTypeLiteralNode(node)) {
        const members = [...node.members].sort((a, b) => key(a).localeCompare(key(b)))
        return ts.factory.updateTypeLiteralNode(node, ts.factory.createNodeArray(members))
      }
      if (ts.isUnionTypeNode(node)) {
        const types = [...node.types].sort((a, b) => key(a).localeCompare(key(b)))
        return ts.factory.updateUnionTypeNode(node, ts.factory.createNodeArray(types))
      }
      return node
    }
    return ts.visitNode(root, visit) as ts.SourceFile
  }

  const { transformed: [out], dispose } = ts.transform(source, [transform])
  const result = printer.printFile(out)
  dispose()
  return result
}

export default defineConfig({
  entry: { 'floating-vue': './src/index.ts' },
  format: ['es', 'umd'],
  globalName: 'FloatingVue',
  platform: 'neutral',
  target: 'es2018',
  dts: true,
  clean: true,
  copy: ['./src/style.css'],
  outputOptions: {
    globals: {
      'vue': 'Vue',
      '@floating-ui/dom': 'FloatingUIDOM',
    },
  },
  hooks: {
    'build:done': async ({ options }) => {
      const dir = resolve(options.cwd, options.outDir)
      const esm = resolve(dir, 'floating-vue.d.mts')
      await writeFile(esm, sortDeclarations(await readFile(esm, 'utf8')))
      // Mirror the declarations as .d.ts for the `require` condition.
      await copyFile(esm, resolve(dir, 'floating-vue.d.ts'))
    },
  },
})
