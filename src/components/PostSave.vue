<script setup lang="ts">
import { usePostSaveStore } from '@/stores/usePostSaveStore';
import { useCategoryResponseStore } from '@/stores/useCategoryResponseStore';
import { onBeforeMount } from 'vue';
import TiptapEditor from './TiptapEditor.vue';
import TagInput from './common/TagInput.vue';

const store = usePostSaveStore();
const categoryStore = useCategoryResponseStore();

const submitSavePost = () => {
  store.SAVE_POST()
}

onBeforeMount(() => {
  categoryStore.FETCH_ALL();
})

</script>

<template>
  <div class="tip-tap-container">
    <div class="tip-tap-submit">
      <div class="tip-tap-category-wrapper">
        <select name="category" id="post-category" v-model="store.postSaveForm.categoryTitle">
          <option :value="item.title" v-for="item in categoryStore.categories" :key="item.id">{{ item.title }}</option>
        </select>
      </div>
      <input type="text" placeholder="제목을 입력해주세요." class="tip-tap-post-title" v-model="store.postSaveForm.title">
      <tiptap-editor />
      <div class="tip-tap-tag-submit">
        <tag-input v-model="store.postSaveForm.tags" />
        <div class="tip-tap-submit">
          <button @click="submitSavePost">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tip-tap-container {
  width: px-to-rem(900);
  margin: px-to-rem(60) auto;

  @media (max-width: 767px) {
    width: 100%;
    margin: 35px 0 20px 0;
  }

  @media (min-width:768px) and (max-width: 1024px) {
    width: 100%;
  }

  #post-category {
    margin-bottom: px-to-rem(17);
    border-radius: px-to-rem(8);
    border: 1px solid $light-black;
    padding: px-to-rem(5);
    color: $silver-black;
    font-family: $secondary-font;
  }

  .tip-tap-post-title {
    width: 100%;
    margin-bottom: px-to-rem(17);
    height: px-to-rem(40);
    border-radius: px-to-rem(10);
    border: 1px solid $light-black;
    padding: px-to-rem(10);
    box-sizing: border-box;
    font-family: $secondary-font;

    &::placeholder {
      padding-left: px-to-rem(1);
      transition: all .3s ease;
    }

    &:focus::placeholder {
      opacity: 0;
    }

    &:focus {
      outline: none;
    }
  }

  .tip-tap-tag-submit {
    display: flex;
    justify-content: space-between;
    margin-top: px-to-rem(17);

    .tip-tap-submit {
      button {
        border: none;
        background-color: #ff793f;
        cursor: pointer;
        font-family: $secondary-font;
        padding: px-to-rem(7);
        border-radius: px-to-rem(5);
        color: $pearl;
        transition: all .5s ease;

        &:hover {
          transform: translate(-5px, -5px);
          box-shadow: 3px 3px #cd6133;
        }

      }
    }
  }
}
</style>