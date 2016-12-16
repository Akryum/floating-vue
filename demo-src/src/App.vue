<template>
  <div id="app">

    <header>
      <h1>v-tooltip</h1>
      <div class="command">npm install --save v-tooltip</div>
      <nav>
        <a href="https://github.com/Akryum/vue-tooltip"><img src="https://img.shields.io/github/stars/Akryum/vue-tooltip.svg?style=social&label=Star" /></a>
        <a href="https://www.npmjs.com/package/v-tooltip">
          <img src="https://img.shields.io/npm/v/v-tooltip.svg" />
          <img src="https://img.shields.io/npm/dm/v-tooltip.svg" />
        </a>
        <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/vue-2.0-orange.svg" /></a>
      </nav>
    </header>

    <section class="demo">
      <div class="section-content">
        <input class="tooltip-content" v-model="msg" placeholder="Tooltip content" />

        <button class="tooltip-target" v-tooltip.top-center="msg">Hover me</button>
      </div>
    </section>

    <section class="snippets">
      <div class="section-content">
        <code-snippet class="snippet" :code="mainSnippet" lang="js"></code-snippet>
        <div class="plus">+</div>
        <code-snippet class="snippet" :code="componentSnippet" lang="html"></code-snippet>
        <div class="plus">+</div>
        <code-snippet class="snippet" :code="styleSnippet" lang="scss"></code-snippet>
      </div>
    </section>

  </div>
</template>

<script>
import CodeSnippet from './CodeSnippet.vue'

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

const componentSnippet = `
<button v-tooltip.top-center="msg">Hover me</button>
`

const styleSnippet = `
.tooltip {
  display: none;
  opacity: 0;
  transition: opacity .15s;
  pointer-events: none;
  padding: 4px;
  z-index: 10000;

  .tooltip-content {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  &.tooltip-open-transitionend {
    display: block;
  }

  &.tooltip-after-open {
    opacity: 1;
  }
}
`

export default {
  name: 'app',
  components: {
    CodeSnippet,
  },
  data () {
    return {
      msg: `This is a button.`,
      mainSnippet,
      componentSnippet,
      styleSnippet,
    }
  },
}
</script>

<style lang="scss">
@import "~style/imports";

body {
  margin: 0;
  background: #fcfcfc;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header {
  background: $primary-color;
  padding: 64px 32px;

  nav {
    text-align: center;
  }
}

section {
  .section-content {
    max-width: 500px;
    margin: auto;
    padding: 64px 0;
    box-sizing: border-box;
  }
}

h1 {
  color: white;
  font-weight: normal;
  text-align: center;
  margin: 0 0 32px;
}

a {
  color: $primary-color;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: lighten($primary-color, 10%);
  }
}

button,
input {
  font-size: inherit;
  font-family: inherit;
  border: none;
  outline: none;
  padding: 12px 24px;
  border-radius: 2px;
}

button {
  background: $primary-color;
  color: white;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  transition: background .3s;

  &:hover {
    background: lighten($primary-color, 10%);
  }
}

input {
  background: white;
  display: block;
  margin-bottom: 12px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: solid 2px $md-grey-300;
  border-right: solid 1px $md-grey-100;
  text-align: left;

  &:focus {
    border-bottom-color: $primary-color;
  }
}

.tooltip {
  display: none;
  opacity: 0;
  transition: opacity .15s;
  pointer-events: none;
  padding: 4px;
  z-index: 10000;

  .tooltip-content {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  &.tooltip-open-transitionend {
    display: block;
  }

  &.tooltip-after-open {
    opacity: 1;
  }
}

.command {
  background: darken($primary-color, 10%);
  color: white;
  font-family: monospace;
  max-width: 500px;
  margin: 12px auto;
  border-radius: 2px;
  padding: 12px 24px;
  box-sizing: border-box;
}

.snippet {
  margin: 16px 0;
}

.plus {
  text-align: center;
  color: $primary-color;
  font-size: 32px;
  margin: 12px;
}

.snippets {

}

.demo {
  background: #eee;

  .section-content {
    text-align: center;
  }

  button {
    margin-top: 24px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding: 0;
    text-transform: uppercase;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 16px;
    transform: rotate(-12deg);
  }
}

</style>
