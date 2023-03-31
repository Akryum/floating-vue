import * as VTooltip from './v-tooltip'

jest.mock('../lib/tooltip')

describe('getPlacement', () => {
  test('object notation', () => {
    const value = {
      placement: 'bottom',
    }
    const modifiers = {}
    const result = VTooltip.getPlacement(value, modifiers)
    expect(result).toBe('bottom')
  })

  test('modifier', () => {
    const value = {}
    const modifiers = {
      'top-end': true,
    }
    const result = VTooltip.getPlacement(value, modifiers)
    expect(result).toBe('top-end')
  })

  test('invalid modifier', () => {
    const value = {}
    const modifiers = {
      'top-middle': true,
    }
    const result = VTooltip.getPlacement(value, modifiers)
    expect(typeof result).toBe('undefined')
  })
})

describe('getContent', () => {
  test('string', () => {
    const value = 'foo'
    const result = VTooltip.getContent(value)
    expect(result).toBe('foo')
  })

  test('object', () => {
    const value = { content: 'foo' }
    const result = VTooltip.getContent(value)
    expect(result).toBe('foo')
  })

  test('false', () => {
    const value = false
    const result = VTooltip.getContent(value)
    expect(result).toBe(false)
  })

  test('null', () => {
    const value = null
    const result = VTooltip.getContent(value)
    expect(result).toBe(false)
  })

  test('false content attribute', () => {
    const value = { content: false }
    const result = VTooltip.getContent(value)
    expect(result).toBe(false)
  })

  test('no content attribute', () => {
    const value = {}
    const result = VTooltip.getContent(value)
    expect(typeof result).toBe('undefined')
  })
})

describe('getOptions', () => {
  test('defaultOptions', () => {
    const options = {}
    const result = VTooltip.getOptions(options)
    const defaultOptions = VTooltip.defaultOptions()
    expect(result).toEqual({
      placement: defaultOptions.defaultPlacement,
      delay: defaultOptions.defaultDelay,
      html: defaultOptions.defaultHtml,
      template: defaultOptions.defaultTemplate,
      innerSelector: defaultOptions.defaultInnerSelector,
      arrowSelector: defaultOptions.defaultArrowSelector,
      trigger: defaultOptions.defaultTrigger,
      offset: defaultOptions.defaultOffset,
      container: defaultOptions.defaultContainer,
      boundariesElement: defaultOptions.defaultBoundariesElement,
      autoHide: defaultOptions.autoHide,
      hideOnTargetClick: defaultOptions.defaultHideOnTargetClick,
      loadingClass: defaultOptions.defaultLoadingClass,
      loadingContent: defaultOptions.defaultLoadingContent,
      popperOptions: defaultOptions.defaultPopperOptions,
    })
  })
})

describe('destroyTooltip', () => {
  test('is deleted', () => {
    const dispose = jest.fn(x => null)
    const el = {
      _tooltip: {
        dispose: dispose,
      },
      _tooltipOldShow: {},
    }

    VTooltip.destroyTooltip(el)

    expect(dispose.mock.calls.length).toBe(1)
    expect(el._tooltip).toBeUndefined()
    expect(el._tooltipOldShow).toBeUndefined()
  })
})
