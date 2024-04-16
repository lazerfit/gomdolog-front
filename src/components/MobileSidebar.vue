<script setup lang=ts>
import SearchBar from './common/SearchBar.vue';
import { RouterLink } from 'vue-router';
import { useCategoryResponseStore } from '@/stores/useCategoryResponseStore';
import { computed, onBeforeMount, ref, watchEffect } from 'vue';
import { usePostResponseStore } from '@/stores/usePostResponseStore';
import { useRoute } from 'vue-router';

const store = useCategoryResponseStore();
const postStore = usePostResponseStore();
const route = useRoute();

const filteredCategory = (computed(() => store.categories.filter(category => category.title !== '없음')))

const isBoxChecked = ref(false);

onBeforeMount(() => {
  store.FETCH_ALL()
})

watchEffect(() => {
  const categoryTitle = route.params.title;
  if (categoryTitle) {
    isBoxChecked.value = false
    postStore.BY_CATEGORY_SEARCH(categoryTitle);
  }
})

</script>
<template>
  <div class="mobile-menu">
    <input type="checkbox" id="trigger" v-model="isBoxChecked">
    <label for="trigger">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <div class="sidebar">
      <div class="searchbar-wrapper">
        <search-bar />
      </div>
      <div class="category-wrapper">
        <RouterLink :to="{ name: 'category', params: { title: item.title } }" class="category"
          v-for="(item, index) in filteredCategory" :key="index">
          {{ item.title }}
        </RouterLink>
      </div>
      <div class="login-wrapper">
        <!-- <div class="login-btn">
          로그인
        </div> -->
        <div class="admin-menu-wrapper">
          <div>
            <RouterLink to="/post/new">글쓰기</RouterLink>
          </div>
          <div>
            <RouterLink to="/admin">설정</RouterLink>
          </div>
          <div>
            <a href="#none">로그아웃</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.darkMode {
  label[for=trigger] {
    span {
      background-color: $pearl !important;
    }
  }

  .sidebar {
    background-color: #121212 !important;

    .category {
      background-color: $pearl !important;
      color: $black-forest !important;
    }
  }
}

.mobile-menu {
  @media screen and (min-width: 1024px) {
    display: none;
  }

  @media (min-width:768px) and (max-width: 1023px) {
    display: none;
  }

  input[id=trigger] {
    @media screen and (max-width: 767px) {
      display: none;

      &:checked+label[for=trigger] span:nth-child(1) {
        top: 50%;
        transform: rotate(45deg);
      }

      &:checked+label[for=trigger] span:nth-child(2) {
        opacity: 0;
      }

      &:checked+label[for=trigger] span:nth-child(3) {
        top: 50%;
        transform: rotate(-45deg);
      }

      &:checked~.sidebar {
        right: 0;
      }
    }
  }

  label[for=trigger] {
    @media screen and (max-width: 767px) {
      width: 25px;
      height: 20px;
      display: block;
      margin-right: 5px;
      position: relative;
      cursor: pointer;

      span {
        position: absolute;
        height: 2px;
        width: 100%;
        background-color: $black-forest;
        left: 0;
        transition: all .3s ease;

        &:nth-child(1) {
          top: 0;
        }

        &:nth-child(2) {
          top: 50%;
        }

        &:nth-child(3) {
          top: 100%;
        }
      }
    }
  }

  .sidebar {
    @media screen and (max-width: 767px) {
      width: 300px;
      height: 93vh;
      position: fixed;
      background-color: $background-color;
      right: -300px;
      top: 70px;
      transition: .5s ease;

      .searchbar-wrapper {
        position: absolute;
        left: 50%;
        translate: -50% 0;
        top: 20px;
      }

      .category-wrapper {
        position: absolute;
        top: 80px;
        left: 50%;
        translate: -50% 0;

        .category {
          display: block;
          text-align: center;
          padding: 5px;
          margin: 10px 0;
          font-family: $secondary-font;
          width: 100px;
          border-radius: 0.7rem;
          box-shadow: 5px 5px 20px rgba($color: #333, $alpha: .17);
          overflow: hidden;

          &:nth-child(1) {
            background-color: #FFDA79;
            border: none;
            color: #FF793F;
            @include box-shadow-animation(#ccae62);
          }

          &:nth-child(2) {
            background-color: #34ace075;
            border: none;
            color: #227093;
            @include box-shadow-animation(#226f938c);
          }

          &:nth-child(3) {
            background-color: #716fd369;
            border: none;
            color: #706FD3;
            @include box-shadow-animation(#47478788);
          }

          &:nth-child(4) {
            background-color: #33d9b26e;
            border: none;
            color: #218C74;
            @include box-shadow-animation(#218c758a);
          }

          &:nth-child(5) {
            background-color: #ff525277;
            border: none;
            color: #B33939;
            @include box-shadow-animation(#b339398e);
          }
        }
      }
    }

    .login-wrapper {
      position: absolute;
      bottom: 40px;
      left: 50%;
      translate: -50% 0;
      width: 100%;

      .login-btn {
        display: block;
        text-align: center;
        padding: 5px;
        margin: 10px auto;
        font-family: $secondary-font;
        width: 100px;
        border-radius: 0.7rem;
        background-color: $black-forest;
        color: $pearl;
        @include box-shadow-animation($light-black);
        overflow: hidden;
      }

      .admin-menu-wrapper {
        display: flex;
        justify-content: space-between;

        div {
          display: block;
          text-align: center;
          padding: 5px;
          margin: 10px 5px;
          font-family: $secondary-font;
          width: 100px;
          border-radius: 0.7rem;
          background-color: $black-forest;
          color: $pearl;
          @include box-shadow-animation($light-black);
          overflow: hidden;

          a {
            color: $pearl;
          }
        }
      }
    }
  }
}
</style>