import { defineComponent, h, onBeforeUnmount, onMounted, useTemplateRef } from 'vue'

export default defineComponent({
  name: 'ResizeObserver',

  props: {
    emitOnMount: Boolean,
  },

  emits: {
    notify: (size: { width: number, height: number }) => !!size,
  },

  setup (props, { emit }) {
    const root = useTemplateRef<HTMLElement>('root')

    let observer: ResizeObserver | undefined
    let width = 0
    let height = 0

    function notify (target: Element) {
      const nextWidth = target.clientWidth
      const nextHeight = target.clientHeight
      if (nextWidth === width && nextHeight === height) {
        return
      }
      width = nextWidth
      height = nextHeight
      emit('notify', { width, height })
    }

    onMounted(() => {
      const target = root.value?.parentNode
      if (!(target instanceof Element)) {
        return
      }

      width = target.clientWidth
      height = target.clientHeight
      if (props.emitOnMount) {
        emit('notify', { width, height })
      }

      observer = new ResizeObserver(() => notify(target))
      observer.observe(target)
    })

    onBeforeUnmount(() => {
      observer?.disconnect()
    })

    return () => h('div', {
      ref: 'root',
      class: 'v-popper__resize-observer',
      'aria-hidden': 'true',
    })
  },
})
