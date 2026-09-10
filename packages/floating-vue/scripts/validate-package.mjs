import { execFile } from 'node:child_process'
import { access, mkdtemp, readdir, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'

/** Executes local packaging commands and resolves their output. */
const execute = promisify(execFile)

/** Absolute path to package whose manifest and archive are validated. */
const packageDirectory = dirname(dirname(fileURLToPath(import.meta.url)))

/**
 * Fails validation with a package-focused error that remains useful in CI logs.
 *
 * @param {boolean} condition Whether package metadata or contents are valid.
 * @param {string} message Problem found in package metadata or archive contents.
 */
function assertPackage (condition, message) {
  if (!condition) throw new Error(`Invalid published package: ${message}`)
}

/**
 * Checks whether a generated declaration exists before it is packed.
 *
 * @param {string} filePath Absolute declaration file path.
 * @returns {Promise<boolean>} Whether declaration file exists.
 */
async function fileExists (filePath) {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

/**
 * Validates manifest declaration metadata and archive contents from `pnpm pack`.
 * This catches declaration paths that work in source but break after publishing.
 *
 * @returns {Promise<void>} Completes when generated package is publishable.
 */
async function validatePackage () {
  const manifestPath = join(packageDirectory, 'package.json')
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'))
  const rootExport = manifest.exports?.['.']

  assertPackage(manifest.types === 'dist/index.d.ts', 'types must be dist/index.d.ts')
  assertPackage(rootExport?.types === './dist/index.d.ts', 'exports["."].types must be ./dist/index.d.ts')
  assertPackage(Object.keys(rootExport)[0] === 'types', 'exports["."].types must precede runtime conditions')
  assertPackage(await fileExists(join(packageDirectory, manifest.types)), `${manifest.types} is missing after build`)
  assertPackage(await fileExists(join(packageDirectory, rootExport.types)), `${rootExport.types} is missing after build`)

  const archiveDirectory = await mkdtemp(join(tmpdir(), 'floating-vue-package-'))

  try {
    await execute('pnpm', ['pack', '--pack-destination', archiveDirectory, '--json'], {
      cwd: packageDirectory,
    })

    const archives = (await readdir(archiveDirectory)).filter(fileName => fileName.endsWith('.tgz'))
    assertPackage(archives.length === 1, 'pnpm pack must create one tarball')

    const archivePath = join(archiveDirectory, archives[0])
    const { stdout } = await execute('tar', ['-tzf', archivePath])
    const entries = stdout.trim().split('\n').filter(Boolean)

    assertPackage(entries.includes('package/dist/index.d.ts'), 'tarball is missing dist/index.d.ts')
    assertPackage(!entries.some(entry => entry.startsWith('package/dist/src/')), 'tarball must not contain dist/src declarations')
    assertPackage(
      !entries.some(entry => entry.endsWith('.d.ts') && (entry.includes('.spec.') || entry.includes('.test.') || entry.includes('/tests/'))),
      'tarball must not contain test or spec declarations',
    )
  } finally {
    await rm(archiveDirectory, { force: true, recursive: true })
  }
}

await validatePackage()
