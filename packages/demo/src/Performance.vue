<template>
  <div class="page-home page">
      <rich-text-editor v-model="content" :content="content"></rich-text-editor>
      <div
            v-for="k in Array.from(Array(1000).keys())"
            :key="k"
            v-tooltip.top="`static content, no need re-render`"
            for="notAnonymous"
        >
            Hover Me
        </div>
  </div>
</template>

<script>
import RichTextEditor from "./RichTextEditor.vue";


export default {
  name: 'Home',
  components: {
    RichTextEditor
  },

  data () {
    return {
      msg: 'This is a button.',
      content: 'default <strong>content</strong>'
    }
  },

  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
.close {
  text-align: center;
  margin-top: 12px;
}
</style>
