import PopperWrapper from './internals/PopperWrapper'

const Component = ({
  ...PopperWrapper,
  name: 'VMenu',
  vPopperTheme: 'menu',
}) as unknown as typeof PopperWrapper

export default Component
