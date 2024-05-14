<script setup lang=ts>
import { onBeforeMount } from 'vue';
import { useCategoryResponseStore } from '@/stores/useCategoryStore';
import type { CategoryResponse } from '@/utils/types';
import { useAdminStore } from '@/stores/useAdminStore';

const adminStore = useAdminStore();

const store = useCategoryResponseStore();

const addDiv = () => {
  store.divList.push({ inputValue: '' });
}

const categorySave = (data: string) => {
  store.SAVE_CATEGORY(data);
}

const deleteCategory = (id: number) => {
  store.DELETE(id);
}

const editTitle = (item: CategoryResponse) => {
  item.isEditable = !item.isEditable
  store.updateTitle = item.title;
}

const updateCategory = (id: number) => {
  store.UPDATE_CATEGORY(id);
}

onBeforeMount(() => {
  store.FETCH_ALL();
})

</script>
<template>
  <div class="category-container" v-if="adminStore.isCategoryShow">
    <h1>Category</h1>
    <div class="categories">
      <div class="category" v-for="item in store.categories" :key="item.id">
        <div class="title" v-if="!item.isEditable">
          {{ item.title }}
        </div>
        <input v-else v-model="store.updateTitle" type="text" placeholder="change title..."
          @keyup.enter="updateCategory(item.id)">
        <div class="btns">
          <i class="fa-solid fa-rotate" @click="editTitle(item)"></i>
          <i class="fa-solid fa-trash" @click="deleteCategory(item.id)"></i>
        </div>
      </div>
      <div v-for="(item, index) in store.divList" :key="index" class="add-div">
        <input type="text" v-model="item.inputValue" placeholder="type something.."
          @keyup.enter="categorySave(item.inputValue)">
        <button @click="categorySave(item.inputValue)">
          <i class="fa-solid fa-plus"></i>
        </button>
        <span>
          <i class="fa-solid fa-minus" @click="store.divList.splice(index, 1)"></i>
        </span>
      </div>
      <button @click="addDiv" class="add-div-btn">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.darkMode {
  .fa-plus {
    color: $pearl;
  }

  .categories {
    box-shadow: 1px 1px 5px $dim-black !important;
  }
}

.category-container {
  margin: 0 px-to-rem(20);
  width: 100%;

  @media (max-width: 767px) {
    width: 100%;
  }

  .categories {
    border-radius: px-to-rem(10);
    box-shadow: 3px 3px 10px $light-black;
    margin-top: px-to-rem(15);
    padding: px-to-rem(10);
    text-align: center;

    @media (max-width: 767px) {
      width: 100%;
      margin-bottom: 30px;
    }

    .category {
      margin: px-to-rem(15);
      display: flex;

      input {
        @include basic-input
      }

      .btns {
        margin-left: auto;

        i {
          margin-right: px-to-rem(5);
          cursor: pointer;
          color: $light-black;
          transition: all .3s ease;

          &:hover {
            color: $black-forest;
          }
        }
      }
    }

    .add-div {

      input {
        max-width: px-to-rem(150);
        border: none;
        border-bottom: 1px solid $dim-black;
        height: px-to-rem(23);
        transition: all .3s ease-in-out;
        font-family: $secondary-font;
        padding-left: px-to-rem(2);

        &:focus::placeholder {
          opacity: 0;
        }

        &::placeholder {
          font-family: $secondary-font-en;
          font-size: 1.3rem;
          font-weight: 600;
          transition: all .3s ease-in-out;
        }
      }

      button {
        border: none;
        background-color: transparent;
        margin-top: px-to-rem(10);
        margin-left: px-to-rem(10);
        padding: px-to-rem(3);
        color: $dark-gray;
        transition: all .3s ease-in-out;

        &:hover {
          color: $black-forest;
        }
      }

      span {
        margin-left: px-to-rem(5);
        color: $dark-gray;
        transition: all .3s ease-in-out;

        &:hover {
          color: $black-forest;
        }
      }
    }

    .add-div-btn {
      border: none;
      background-color: transparent;
      margin-top: px-to-rem(20);
      padding: px-to-rem(3);
    }
  }
}
</style>