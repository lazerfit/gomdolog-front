<script setup lang=ts>
import { useAdminStore } from '@/stores/useAdminStore';

const adminStore = useAdminStore();

const makeNotShowAll = () => {
  adminStore.isCategoryShow = false;
  adminStore.isDashboardShow = false;
  adminStore.isRecycleBinShow = false;
  adminStore.isUserShow = false;
}

const categoryShow = () => {
  makeNotShowAll()
  adminStore.isCategoryShow = !adminStore.isCategoryShow
}

const dashboardShow = () => {
  makeNotShowAll()
  adminStore.isDashboardShow = !adminStore.isDashboardShow;
}

const recycleBinShow = () => {
  makeNotShowAll()
  adminStore.isRecycleBinShow = !adminStore.isRecycleBinShow;
}
</script>
<template>
  <aside>
    <div class="content-wrapper">
      <input type="radio" id="home" name="asdie" value="home" checked>
      <label for="home">
        <div class="dashboard menu" @click="dashboardShow">
          <span>
            <i class="fa-solid fa-house"></i>
          </span>
          <span class="title">
            Home
          </span>
        </div>
      </label>
      <input type="radio" id="category" name="asdie" value="category">
      <label for="category">
        <div class="category menu" @click="categoryShow">
          <span>
            <i class="fa-solid fa-table-list"></i>
          </span>
          <span class="title">
            Category
          </span>
        </div>
      </label>
      <input type="radio" id="recycleBin" name="asdie" value="recycleBin">
      <label for="recycleBin">
        <div class="recycleBin menu" @click="recycleBinShow">
          <span>
            <i class="fa-regular fa-trash-can"></i>
          </span>
          <span class="title">
            Recycle Bin
          </span>
        </div>
      </label>
    </div>
  </aside>
</template>

<style lang='scss' scoped>
.darkMode {
  aside {
    box-shadow: 1px 1px 5px $dim-black;
  }

  input[type="radio"] {
    display: none;

    &:checked+label>div {
      background-color: $pearl !important;
      color: $black-forest !important;
    }
  }
}

aside {
  border: 1px solid #000;
  width: px-to-rem(160);
  height: px-to-rem(1050);
  margin: px-to-rem(30) px-to-rem(30) px-to-rem(30) 0;
  border: 1px solid #000;
  border-radius: px-to-rem(10);
  box-shadow: 5px 5px 5px $light-black;

  @media (max-width: 767px) {
    height: 50px;
    width: 100%;
  }

  .content-wrapper {
    margin: px-to-rem(20);
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: px-to-rem(15);
    transition: all .3s ease;

    .menu {
      padding: 5px;
      border-radius: 5px;
    }

    @media (max-width: 767px) {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      margin: 0;

      .title {
        display: none;
      }
    }

    input[type="radio"] {
      display: none;

      &:checked+label>div {
        background-color: #121212;
        color: $pearl;
      }
    }

    span {
      font-family: $secondary-font;
      cursor: pointer;
    }

    .title {
      font-weight: 500;

      &:hover {
        text-shadow: 1px 1px 2px $light-black;
      }
    }
  }
}
</style>