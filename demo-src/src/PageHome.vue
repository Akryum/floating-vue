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

    <section class="demo">
      <div class="section-content">
        <h2>Reactive content</h2>
        <input class="tooltip-content" v-model="msg" placeholder="Tooltip content" />

        <button class="tooltip-target" v-tooltip.top-center="msg">Hover me</button>
      </div>
    </section>

    <section class="snippets">
      <Collapse title="Show code">
        <div class="section-content">
          <CodeSnippet class="snippet" :code="mainSnippet" lang="js"/>
          <div class="plus">+</div>
          <CodeSnippet class="snippet" :code="componentSnippet1" lang="html"/>
          <div class="plus">+</div>
          <CodeSnippet class="snippet" :code="styleSnippet1" lang="scss"/>
        </div>
      </Collapse>
    </section>

    <section class="demo">
      <div class="section-content">
        <h2>Customize it!</h2>
        <button class="tooltip-target b2" v-tooltip="{
          content: 'You can change a lot of parameters: placement, classes, offset, delay...',
          placement: 'bottom-center',
          classes: ['info'],
          offset: 100,
          delay: {
            show: 500,
            hide: 0,
          },
        }">Hover me</button>
      </div>
    </section>

    <section class="snippets">
      <Collapse title="Show code">
        <div class="section-content">
          <CodeSnippet class="snippet" :code="componentSnippet2" lang="html"/>
          <div class="plus">+</div>
          <CodeSnippet class="snippet" :code="styleSnippet2" lang="scss"/>
        </div>
      </Collapse>
    </section>

    <section class="demo">
      <div class="section-content">
        <h2>Use with components to create a popover</h2>
        <v-popover
          offset="16"
        >
          <button class="tooltip-target b3">Click me</button>

          <template slot="popover">
            <input class="tooltip-content" v-model="msg" placeholder="Tooltip content" />
            <p>
              {{ msg }}
            </p>

            <ExampleComponent char="=" />
          </template>
        </v-popover>
      </div>
    </section>

    <section class="snippets">
      <Collapse title="Show code">
        <div class="section-content">
          <CodeSnippet class="snippet" :code="componentSnippet3" lang="html"/>
          <div class="plus">+</div>
          <CodeSnippet class="snippet" :code="styleSnippet3" lang="scss"/>
        </div>
      </Collapse>
    </section>

    <section class="demo">
      <div class="section-content">
        <h2>Manual mode</h2>

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
            <button class="tooltip-target b1">A button</button>

            <template slot="popover">
              <input class="tooltip-content" v-model="msg" placeholder="Tooltip content" />
              <p>
                {{ msg }}
              </p>
            </template>
          </v-popover>
        </template>
      </div>
    </section>

    <section class="snippets">
      <Collapse title="Show code">
        <div class="section-content">
          <CodeSnippet class="snippet" :code="componentSnippet4" lang="html"/>
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
  offset: 100,
  delay: {
    show: 500,
    hide: 0,
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
>
  <button class="tooltip-target b3">Click me</button>

  <template slot="popover">
    <input class="tooltip-content" v-model="msg" placeholder="Tooltip content" />
    <p>
      {{ msg }}
    </p>

    <ExampleComponent char="=" />
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
    <button class="tooltip-target b1">A button</button>

    <template slot="popover">
      <input class="tooltip-content" v-model="msg" placeholder="Tooltip content" />
      <p>
        {{ msg }}
      </p>
    </template>
  </v-popover>
</template>
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
      isVisible: true,
      isOpen: false,
      mainSnippet,
      componentSnippet1,
      styleSnippet1,
      componentSnippet2,
      styleSnippet2,
      componentSnippet3,
      styleSnippet3,
      componentSnippet4,
    }
  },

  methods: {
    toggleFullscreen (event) {
      if (screenfull.enabled) {
        screenfull.toggle(document.documentElement)
      }
    },
  },
}
</script>
