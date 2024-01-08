import PopperWrapper from './PopperWrapper.vue'

const Component = ({
  ...PopperWrapper,
  name: 'VTooltip',
  vPopperTheme: 'tooltip',
}) as unknown as typeof PopperWrapper

export default Component
