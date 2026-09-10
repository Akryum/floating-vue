import PopperWrapper from './internals/PopperWrapper'

const Component = ({
  ...PopperWrapper,
  name: 'VDropdown',
  vPopperTheme: 'dropdown',
}) as unknown as typeof PopperWrapper

export default Component
