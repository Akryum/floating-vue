import PopperWrapper from './PopperWrapper.vue'

const Component = ({
  ...PopperWrapper,
  name: 'VDropdown',
  vPopperTheme: 'dropdown',
}) as unknown as typeof PopperWrapper

export default Component
