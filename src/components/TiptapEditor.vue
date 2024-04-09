<script setup lang=ts>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import { usePostSaveStore } from '@/stores/usePostSaveStore';

const store = usePostSaveStore();

const editor = useEditor({
  content: store.postSaveForm.content,
  onUpdate: ({ editor }) => {
    store.postSaveForm.content = editor.getHTML();
  },
  onDestroy: () => {
    store.postSaveForm.content = '';
  },
  extensions: [
    StarterKit,
    Image
  ],
  editorProps: {
    attributes: {
      class: 'edit'
    },
  },
})

const addImage = () => {
  const url = window.prompt('URL');
  if (url) {
    editor.value.chain().focus().setImage({ src: url }).run()
  }
}
</script>
<template>
  <div class=" tip-tap-buttons" v-if="editor">
    <button @click="editor.chain().focus().toggleBold().run()"
      :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }"
      class="menu-btn">
      <i class="fa-solid fa-bold"></i>
    </button>
    <button @click="editor.chain().focus().toggleItalic().run()"
      :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }"
      class="menu-btn">
      <i class="fa-solid fa-italic"></i>
    </button>
    <button @click="editor.chain().focus().toggleStrike().run()"
      :disabled="!editor.can().chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }"
      class="menu-btn">
      <i class="fa-solid fa-strikethrough"></i>
    </button>
    <button @click="editor.chain().focus().toggleCode().run()"
      :disabled="!editor.can().chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }"
      class="menu-btn">
      <i class="fa-solid fa-code"></i>
    </button>
    <button @click="editor.chain().focus().toggleCodeBlock().run()"
      :class="{ 'is-active': editor.isActive('codeBlock') }" class="menu-btn">
      <i class="fa-brands fa-codepen"></i>
    </button>
    <button @click="addImage" class="menu-btn"><i class="fa-solid fa-image"></i></button>
    <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }" class="menu-btn">
      <i class="fa-solid fa-heading"></i>1
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }" class="menu-btn">
      <i class="fa-solid fa-heading"></i>2
    </button>
    <button @click="editor.chain().focus().toggleBulletList().run()"
      :class="{ 'is-active': editor.isActive('bulletList') }" class="menu-btn">
      <i class="fa-solid fa-list-ul"></i>
    </button>
    <button @click="editor.chain().focus().toggleOrderedList().run()"
      :class="{ 'is-active': editor.isActive('orderedList') }" class="menu-btn">
      <i class="fa-solid fa-list-ol"></i>
    </button>
    <button @click="editor.chain().focus().toggleBlockquote().run()"
      :class="{ 'is-active': editor.isActive('blockquote') }" class="menu-btn">
      <i class="fa-solid fa-quote-left"></i>
    </button>
    <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()"
      class="menu-btn">
      <i class="fa-solid fa-rotate-left"></i>
    </button>
    <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()"
      class="menu-btn">
      <i class="fa-solid fa-rotate-right"></i>
    </button>
  </div>
  <editor-content :editor="editor" />
</template>

<style lang='scss'>
.tip-tap-buttons {
  display: flex;
  flex-flow: row wrap;
  border: 1px solid $light-black;
  border-bottom: none;
  height: px-to-rem(50);
  align-items: center;
  border-radius: px-to-rem(10) px-to-rem(10) 0 0;

  &:has(.is-active) .is-active {
    background-color: $black-forest;
    color: $pearl;
  }

  .menu-btn {
    border: none;
    background-color: $background-color;
    color: $black-forest;
    padding: px-to-rem(5);
    border-radius: px-to-rem(3);
    margin-left: px-to-rem(5);

    i {
      cursor: pointer;
      font-size: px-to-rem(16);
    }
  }
}

.tiptap {

  border: 1px solid $light-black;
  min-height: 30rem;
  max-height: 50rem;
  overflow: auto;
  padding: px-to-rem(10);
  border-radius: 0 0 px-to-rem(10) px-to-rem(10);

  &:focus {
    outline: none;
  }

  >*+* {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }
}
</style>