// jsdom does not ship SVGAnimatedString / SVGElement reliably,
// but `directives/util.ts` references them at module load time.
// Provide minimal stand-ins so imports don't crash in the test runtime.
const g = globalThis as unknown as {
  SVGAnimatedString?: unknown
  SVGElement?: unknown
}

g.SVGAnimatedString = g.SVGAnimatedString ?? class SVGAnimatedString {}
g.SVGElement = g.SVGElement ?? class SVGElement {}
