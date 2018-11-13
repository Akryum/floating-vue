<template>
  <div class="page-home page">

    <section class="nav">
      <router-link
        :to="{ name: 'install' }"
        v-tooltip="{
          content: 'Installation Instruction page',
          delay: { show: 400, hide: 0 },
        }"
      >
        Get Started
      </router-link>
      <a href="https://github.com/Akryum/v-tooltip#usage">Documentation</a>
      <a href="https://github.com/Akryum/v-tooltip/issues">Report an issue</a>
      <a @click="toggleFullscreen">Toggle fullscreen</a>
    </section>

	<!-- BUG DEMO -->
    <section class="demo">
      <div class="section-content">
        <h2>Popover bug demo</h2>
		<p>Try to move mouse fast over those tooltips!</p>

		<div style="display: flex; flex-wrap: wrap;">
			<v-popover
				v-for="i in 20"

				:key="i"

				trigger="hover"
				:offset="offset"
				:placement="placement"
				:disabled="!isEnabled"
			>
			<button class="tooltip-target b3 popover-btn">Hover me</button>

			<template slot="popover">
				SOME DEMO CONTENT
			</template>
			</v-popover>
		</div>
      </div>
    </section>
	<!-- / BUG DEMO -->

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
<button v-tooltip.top-center="msg">Hover me</button>
`

const styleSnippet1 = `
.tooltip {
  display: block !important;
  z-index: 10000;

  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}
`

const componentSnippet2 = `
<button v-tooltip="{
  content: msg,
  placement: 'bottom-center',
  classes: ['info'],
  targetClasses: ['it-has-a-tooltip'],
  offset: 100,
  delay: {
    show: 500,
    hide: 300,
  },
}">Hover me</button>`

const styleSnippet2 = `
.tooltip {
  // ...

  &.info {
    $color: rgba(#004499, .9);

    .tooltip-inner {
      background: $color;
      color: white;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, .1);
      max-width: 250px;
    }

    .tooltip-arrow {
      border-color: $color;
    }
  }
}
`

const componentSnippet3 = `
<v-popover
  offset="16"
  :disabled="!isEnabled"
>
  <button class="tooltip-target b3">Click me</button>

  <template slot="popover">
    <input class="tooltip-content" v-model="msg" placeholder="Tooltip content" />
    <p>
      {{ msg }}
    </p>

    <ExampleComponent char="=" />

    <a v-close-popover>Close</a>
  </template>
</v-popover>
`

const styleSnippet3 = `
.tooltip {
  // ...

  &.popover {
    $color: #f9f9f9;

    .popover-inner {
      background: $color;
      color: black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, .1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }
}
`

const componentSnippet4 = `
<div class="form">
  <label><input type="checkbox" name="open" v-model="isVisible" /> Enable</label>
</div>

<template v-if="isVisible">
  <div class="form">
    <label><input type="radio" name="open" v-model="isOpen" :value="true" /> Show</label>
    <label><input type="radio" name="open" v-model="isOpen" :value="false" /> Hide</label>
  </div>

  <v-popover
    trigger="manual"
    :open="isOpen"
    offset="16"
    :auto-hide="false"
  >
    <button class="tooltip-target b1">Target</button>

    <template slot="popover">
      <input class="tooltip-content" v-model="msg" placeholder="Tooltip content" />
      <p>
        {{ msg }}
      </p>
    </template>
  </v-popover>
</template>
`

const componentSnippet5 = `
<div class="form">
  <label><input type="checkbox" name="open" v-model="isVisible" /> Enable</label>
</div>

<template v-if="isVisible">
  <div class="form">
    <label><input type="radio" name="open2" v-model="isOpen" :value="true" /> Show</label>
    <label><input type="radio" name="open2" v-model="isOpen" :value="false" /> Hide</label>
  </div>

  <button
    v-tooltip="{
      content: msg,
      show: isOpen,
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
.tooltip {
  // ...

  &.tooltip-loading {
    .tooltip-inner {
      color: #77aaff;
    }
  }
}
`

const componentSnippet7 = `
<a
  v-close-popover.all
>Close All</a>

<v-popover
  :auto-hide="false"
  open-group="group1"
>
  <!-- ... -->
</v-popover>

<v-popover
  :auto-hide="false"
  open-group="group1"
>
  <!-- ... -->
</v-popover>

<v-popover
  :auto-hide="false"
  open-group="group2"
>
  <!-- ... -->
</v-popover>
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
      placement: 'bottom-center',
      isAutoHiding: false,
      isEnabled: true,
      isVisible: true,
      isOpen: false,
      offset: 16,
      mainSnippet,
      componentSnippet1,
      styleSnippet1,
      componentSnippet2,
      styleSnippet2,
      componentSnippet3,
      styleSnippet3,
      componentSnippet4,
      componentSnippet5,
      componentSnippet6,
      styleSnippet6,
      componentSnippet7,
    }
  },

  methods: {
    toggleFullscreen (event) {
      if (screenfull.enabled) {
        screenfull.toggle(document.documentElement)
      }
    },

    asyncContent () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`Hi, I'm some content from a server! :)`)
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
