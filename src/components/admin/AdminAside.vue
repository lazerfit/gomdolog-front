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
      <div class="dashboard" @click="dashboardShow">
        <span>
          <i class="fa-solid fa-clapperboard"></i>
        </span>
        <span class="title">
          Dashboard
        </span>
      </div>
      <div class="category" @click="categoryShow">
        <span>
          <i class="fa-solid fa-table-list"></i>
        </span>
        <span class="title">
          Category
        </span>
      </div>
      <div class="category" @click="recycleBinShow">
        <span>
          <i class="fa-regular fa-trash-can"></i>
        </span>
        <span class="title">
          Recycle Bin
        </span>
      </div>
    </div>
  </aside>
</template>

<style lang='scss' scoped>
.darkMode {
  aside {
    box-shadow: 1px 1px 5px $dim-black;
  }
}

aside {
  border: 1px solid #000;
  width: px-to-rem(140);
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