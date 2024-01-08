import PopperWrapper from './PopperWrapper.vue'

const Component = ({
  ...PopperWrapper,
  name: 'VMenu',
  vPopperTheme: 'menu',
}) as unknown as typeof PopperWrapper

export default Component
