<template>
  <div class="page-home page">
    <section class="nav">
      <router-link
        v-tooltip="{
          content: 'Installation Instruction page',
          delay: { show: 400, hide: 0 },
        }"
        :to="{ name: 'install' }"
      >
        Get Started
      </router-link>
      <a href="https://github.com/Akryum/v-tooltip#usage">Documentation</a>
      <a href="https://github.com/Akryum/v-tooltip/issues">Report an issue</a>
      <a @click="toggleFullscreen">Toggle fullscreen</a>
    </section>

    <section class="demo">
      <div class="section-content">
        <h2>Reactive content</h2>
        <input
          v-model="msg"
          class="tooltip-content"
          placeholder="Tooltip content"
        >

        <button
          v-tooltip.right="msg"
          class="tooltip-target"
          title="Fallback title"
        >
          Hover me
        </button>

        <!-- <VTooltip
          :disabled="!msg"
          placement="right"
          title="Fallback title"
        >
          <button class="tooltip-target">
            Hover me
          </button>

          <template #popper>
            {{ msg }}
          </template>
        </VTooltip> -->
      </div>
    </section>

    <section class="snippets">
      <Collapse title="Show code">
        <div class="section-content">
          <CodeSnippet
            class="snippet"
            :code="mainSnippet"
            lang="js"
          />
          <div class="plus">
            +
          </div>
          <CodeSnippet
            class="snippet"
            :code="componentSnippet1"
            lang="html"
          />
        </div>
      </Collapse>
    </section>

    <section class="demo">
      <div class="section-content">
        <h2>Customize it!</h2>

        <div class="form">
          <select v-model="placement">
            <option value="bottom">
              bottom
            </option>
            <option value="top">
              top
            </option>
            <option value="left">
              left
            </option>
            <option value="right">
              right
            </option>
          </select>
        </div>

        <button
          v-tooltip="{
            content: 'You can change a lot of parameters: placement, classes, offset, delay...',
            theme: 'info-tooltip',
            // Inline override
            placement,
            offset: 100,
          }"
          class="tooltip-target b2"
        >
          Hover me
        </button>
      </div>
    </section>

    <section class="snippets">
      <Collapse title="Show code">
        <div class="section-content">
          <CodeSnippet
            class="snippet"
            :code="mainSnippet2"
            lang="js"
          />
          <div class="plus">
            +
          </div>
          <CodeSnippet
            class="snippet"
            :code="componentSnippet2"
            lang="html"
          />
          <div class="plus">
            +
          </div>
          <CodeSnippet
            class="snippet"
            :code="styleSnippet2"
            lang="scss"
          />
        </div>
      </Collapse>
    </section>

    <section class="demo">
      <div class="section-content">
        <h2>Async content</h2>

        <button
          v-tooltip="{
            content: () => asyncContent('foo', 'bar'),
            loadingContent: '<i>Loading...</i>',
          }"
          class="tooltip-target"
        >
          Hover me
        </button>
      </div>
    </section>

    <section class="snippets">
      <Collapse title="Show code">
        <div class="section-content">
          <CodeSnippet
            class="snippet"
            :code="componentSnippet6"
            lang="html"
          />
          <div class="plus">
            +
          </div>
          <CodeSnippet
            class="snippet"
            :code="styleSnippet6"
            lang="scss"
          />
        </div>
      </Collapse>
    </section>

    <section class="demo">
      <div class="section-content">
        <h2>"Instant move" mode</h2>

        <button
          v-for="index in 5"
          :key="index"
          v-tooltip="{
            content: `Hey ${index}`,
            delay: {
              show: 1000,
              hide: 500,
            },
            instantMove: true,
          }"
          class="tooltip-target"
        >
          Hover me
        </button>
      </div>
    </section>

    <section class="snippets">
      <Collapse title="Show code">
        <div class="section-content">
          <CodeSnippet
            class="snippet"
            :code="componentSnippet8"
            lang="html"
          />
        </div>
      </Collapse>
    </section>

    <section class="demo">
      <div class="section-content">
        <h2>Manual mode</h2>

        <div class="form">
          <label><input
            v-model="isVisible"
            type="checkbox"
            name="open"
          > Parent visible</label>
        </div>

        <template v-if="isVisible">
          <div class="form">
            <label><input
              v-model="isOpen"
              type="radio"
              name="open2"
              :value="true"
            > Show</label>
            <label><input
              v-model="isOpen"
              type="radio"
              name="open2"
              :value="false"
            > Hide</label>
          </div>

          <button
            v-tooltip="{
              content: msg,
              open: isOpen,
              trigger: 'manual',
              placement: 'bottom',
            }"
            class="tooltip-target"
          >
            A button
          </button>
        </template>
      </div>
    </section>

    <section class="snippets">
      <Collapse title="Show code">
        <div class="section-content">
          <CodeSnippet
            class="snippet"
            :code="componentSnippet5"
            lang="html"
          />
        </div>
      </Collapse>
    </section>

    <section class="demo">
      <div class="section-content">
        <h2>Use with components to create a popover</h2>

        <div class="form">
          <label><input
            v-model="isEnabled"
            type="checkbox"
            name="enabled"
          > Enabled</label>

          <label><input
            v-model="isAutoHiding"
            type="checkbox"
            name="auto-hide"
          > AutoHide</label>

          <select v-model="placement">
            <option value="bottom">
              bottom
            </option>
            <option value="top">
              top
            </option>
            <option value="left">
              left
            </option>
            <option value="right">
              right
            </option>
          </select>
        </div>

        <VDropdown
          :offset="offset"
          :placement="placement"
          :auto-hide="isAutoHiding"
          :disabled="!isEnabled"
          open-class="is-open"
        >
          <button class="tooltip-target b3 popover-btn">
            Click me
          </button>

          <template #popper>
            <input
              v-model="msg"
              class="tooltip-content"
              placeholder="Tooltip content"
            >
            <p>
              {{ msg }}
            </p>

            <ExampleComponent char="✌️" />

            <div class="close">
              <a
                v-close-popper
                class="btn"
              >Close</a>
            </div>
          </template>
        </VDropdown>
      </div>
    </section>

    <section class="snippets">
      <Collapse title="Show code">
        <div class="section-content">
          <CodeSnippet
            class="snippet"
            :code="componentSnippet3"
            lang="html"
          />
          <div class="plus">
            +
          </div>
          <CodeSnippet
            class="snippet"
            :code="styleSnippet3"
            lang="scss"
          />
        </div>
      </Collapse>
    </section>

    <section class="demo">
      <div class="section-content">
        <h2>Open group</h2>

        <div class="form">
          <a
            v-close-popper.all
            class="btn"
          >Close All</a>
        </div>

        <VDropdown
          class="inline"
          :placement="placement"
          :auto-hide="false"
          open-group="group1"
        >
          <button class="tooltip-target b1 popover-btn">
            Group 1
          </button>

          <template #popper>
            <div class="close">
              <a
                v-close-popper
                class="btn"
              >Close</a>
            </div>
          </template>
        </VDropdown>

        <VDropdown
          class="inline"
          :placement="placement"
          :auto-hide="false"
          open-group="group1"
        >
          <button class="tooltip-target b2 popover-btn">
            Group 1
          </button>

          <template #popper>
            <div class="close">
              <a
                v-close-popper
                class="btn"
              >Close</a>
            </div>
          </template>
        </VDropdown>

        <VDropdown
          class="inline"
          :placement="placement"
          :auto-hide="false"
          open-group="group2"
        >
          <button class="tooltip-target b3 popover-btn">
            Group 2
          </button>

          <template #popper>
            <div class="close">
              <a
                v-close-popper
                class="btn"
              >Close</a>
            </div>
          </template>
        </VDropdown>
      </div>
    </section>

    <section class="snippets">
      <Collapse title="Show code">
        <div class="section-content">
          <CodeSnippet
            class="snippet"
            :code="componentSnippet7"
            lang="html"
          />
        </div>
      </Collapse>
    </section>

    <section class="demo">
      <div class="section-content">
        <h2>Manual mode</h2>

        <div class="form">
          <label><input
            v-model="isVisible"
            type="checkbox"
            name="open"
          > Parent visible</label>
        </div>

        <template v-if="isVisible">
          <div class="form">
            <label><input
              v-model="isOpen"
              type="radio"
              name="open"
              :value="true"
            > Show</label>
            <label><input
              v-model="isOpen"
              type="radio"
              name="open"
              :value="false"
            > Hide</label>
          </div>

          <VDropdown
            trigger="manual"
            :open="isOpen"
            offset="16"
            :auto-hide="false"
          >
            <button class="tooltip-target b1 popover-btn">
              Target
            </button>

            <template #popper>
              <input
                v-model="msg"
                class="tooltip-content"
                placeholder="Tooltip content"
              >
              <p>
                {{ msg }}
              </p>
            </template>
          </VDropdown>
        </template>
      </div>
    </section>

    <section class="snippets">
      <Collapse title="Show code">
        <div class="section-content">
          <CodeSnippet
            class="snippet"
            :code="componentSnippet4"
            lang="html"
          />
        </div>
      </Collapse>
    </section>
  </div>
</template>

<script>
import screenfull from 'screenfull'

import CodeSnippet from './CodeSnippet.vue'
import Collapse from './Collapse.vue'
import ExampleComponent from './ExampleComponent.vue'

const mainSnippet = `
import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)

new Vue({
  data: {
    msg: 'This is a button.'
  }
})
`

const componentSnippet1 = `
<button
  v-tooltip.right="msg"
  title="Fallback title"
>
  Hover me
</button>
`

const mainSnippet2 = `
Vue.use(VTooltip, {
  themes: {
    'info-tooltip': {
      $extend: 'tooltip',
      delay: {
        show: 800,
        hide: 500
      }
    }
  }
})
`

const componentSnippet2 = `
<button
  v-tooltip="{
    content: 'You can change a lot of parameters: placement, classes, offset, delay...',
    theme: 'info-tooltip',
    // Inline override
    placement,
    offset: 100,
  }"
>
  Hover me
</button>`

const styleSnippet2 = `
.v-popper--theme-info-tooltip {
  $color: rgba(#004499, .9);

  .v-popper__inner {
    background: $color;
    color: white;
    padding: 24px;
    border-radius: 5px;
    box-shadow: 0 5px 30px rgba(black, .1);
    max-width: 250px;
  }

  .v-popper__arrow {
    border-color: $color;
  }
}
`

const componentSnippet3 = `
<VDropdown
  offset="16"
  :disabled="!isEnabled"
>
  <button>Click me</button>

  <template #popper>
    <input class="tooltip-content" v-model="msg" placeholder="Tooltip content" />
    <p>
      {{ msg }}
    </p>

    <ExampleComponent char="=" />

    <a v-close-popper>Close</a>
  </template>
</VDropdown>
`

const styleSnippet3 = `
.v-popper--theme-dropdown {
  .v-popper__inner {
    border-radius: 5px;
    box-shadow: 0 5px 30px rgba(black, .1);
  }
}
`

const componentSnippet4 = `
<div class="form">
  <label><input type="checkbox" name="open" v-model="isVisible" /> Parent visible</label>
</div>

<template v-if="isVisible">
  <div class="form">
    <label><input type="radio" name="open" v-model="isOpen" :value="true" /> Show</label>
    <label><input type="radio" name="open" v-model="isOpen" :value="false" /> Hide</label>
  </div>

  <VDropdown
    trigger="manual"
    :open="isOpen"
    offset="16"
    :auto-hide="false"
  >
    <button>Target</button>

    <template #popper>
      <input class="tooltip-content" v-model="msg" placeholder="Tooltip content" />
      <p>
        {{ msg }}
      </p>
    </template>
  </VDropdown>
</template>
`

const componentSnippet5 = `
<div class="form">
  <label><input type="checkbox" name="open" v-model="isVisible" /> Parent visible</label>
</div>

<template v-if="isVisible">
  <div class="form">
    <label><input type="radio" name="open2" v-model="isOpen" :value="true" /> Show</label>
    <label><input type="radio" name="open2" v-model="isOpen" :value="false" /> Hide</label>
  </div>

  <button
    v-tooltip="{
      content: msg,
      open: isOpen,
      trigger: 'manual',
      placement: 'bottom',
    }"
  >A button</button>
</template>
`

const componentSnippet6 = `
<button
  v-tooltip="{
    content: asyncContent,
    loadingContent: '<i>Loading...</i>',
  }"
>Hover me</button>
`

const styleSnippet6 = `
.v-popper--tooltip-loading {
  .v-popper__inner {
    color: #77aaff;
  }
}
`

const componentSnippet7 = `
<a
  v-close-popper.all
>Close All</a>

<VDropdown
  :auto-hide="false"
  open-group="group1"
>
  <!-- ... -->
</VDropdown>

<VDropdown
  :auto-hide="false"
  open-group="group1"
>
  <!-- ... -->
</VDropdown>

<VDropdown
  :auto-hide="false"
  open-group="group2"
>
  <!-- ... -->
</VDropdown>
`

const componentSnippet8 = `
<button
  v-for="index in 5"
  :key="index"
  v-tooltip="{
    content: 'Hey ' + index,
    delay: {
      show: 1000,
      hide: 500,
    },
    instantMove: true,
  }"
  class="tooltip-target"
>
  Hover me
</button>
`

export default {
  name: 'Home',

  components: {
    CodeSnippet,
    Collapse,
    ExampleComponent,
  },

  data () {
    return {
      msg: `This is a button.`,
      placement: 'bottom',
      isAutoHiding: false,
      isEnabled: true,
      isVisible: true,
      isOpen: false,
      offset: 16,
      mainSnippet,
      componentSnippet1,
      mainSnippet2,
      componentSnippet2,
      styleSnippet2,
      componentSnippet3,
      styleSnippet3,
      componentSnippet4,
      componentSnippet5,
      componentSnippet6,
      styleSnippet6,
      componentSnippet7,
      componentSnippet8,
    }
  },

  methods: {
    toggleFullscreen (event) {
      if (screenfull.enabled) {
        screenfull.toggle(document.documentElement)
      }
    },

    asyncContent (...params) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`Hi, I'm some content from a server! :)<br>Params: ${params}`)
        }, 2000)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.close {
  text-align: center;
  margin-top: 12px;
}
</style>
