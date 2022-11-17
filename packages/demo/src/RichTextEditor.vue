<template>
    <div
        :id="`editor-${uniqId}`"
        :ref="`editor-${uniqId}`"
        class="editor"
    >
        <editor-content :editor="editor" />

    </div>
</template>

<script>
import { Editor, EditorContent } from "tiptap";



export default {
    components: {
        EditorContent,
    },
    props: {
        content: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            editor: null,
            
            uniqId: Math.random().toString(36),
            targetStyle: {},
            
        };
    },
    computed: {
       
    },
    watch: {
        content(c) {
            if (this.editor && !this.editorChange) {
                this.editor.setContent(c, true);
            }
            this.editorChange = false;
        },
    },
    mounted() {
        const extensions = [
            
        ];
        
        this.editor = new Editor({
            onUpdate: ({ getHTML }) => {
                this.editorChange = true;
                this.$emit("input", getHTML());
            },
            onBlur: ({ event }) => {
                this.$emit("blur", event);
            },
            content: this.content,
            extensions,
        });
    },
    beforeDestroy() {
        this.editor?.destroy();
    },
    methods: {
    },
};
</script>
