import PopperWrapper from './internals/PopperWrapper'

const Component = ({
  ...PopperWrapper,
  name: 'VTooltip',
  vPopperTheme: 'tooltip',
}) as unknown as typeof PopperWrapper

export default Component
