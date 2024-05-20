<script setup lang=ts>
import { usePostResponseStore } from '@/stores/usePostResponseStore';

const store = usePostResponseStore();

const searchPost = () => {
  window.location.href = '/search/' + store.searchQuery;
}
</script>
<template>
  <div class="container">
    <div class="title">
      <p>Unlocking the Future with Technology</p>
    </div>
    <div class="search-bar">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="search" name="search" pattern=".*\S.*" required placeholder="search..." v-model="store.searchQuery"
        @keyup.enter="searchPost">
    </div>
  </div>
</template>

<style lang='scss' scoped>
.darkMode {
  .container {
    border-bottom: 1px solid $dim-black;
    border-top: 1px solid $pearl !important;

    .search-bar {
      border: 1px solid $pearl;

      input {
        color: $pearl;

        &::placeholder {
          color: $light-black;
        }
      }
    }
  }
}

.container {
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid $black-forest;
  margin-top: 10px;

  .title {
    text-align: center;

    p {
      font-size: px-to-rem(34);
      font-family: "Playfair Display", serif;
      font-weight: 500;
    }
  }

  .search-bar {
    margin: 14px auto;
    border: 1px solid rgba(0, 0, 0, 0.315);
    border-radius: 5px;
    height: 27px;
    display: flex;
    align-items: center;

    i {
      padding-left: 5px;
    }

    input {
      width: 220px;
      background-color: transparent;
      border: none;
      padding: 3px;

      &:focus::placeholder {
        opacity: 0;
      }

      &::placeholder {
        font-family: "Playfair Display", serif;
        padding-left: 5px;
        transition: all .3s;
      }
    }
  }
}
</style>