<script setup lang=ts>
import AdminAside from './AdminAside.vue';
import AdminCategory from './AdminCategory.vue';
import AdminRecycleBin from './AdminRecycleBin.vue';
import AdminPopularPosts from './AdminPopularPosts.vue';
import AdminUserList from './AdminUserList.vue';
import BasicToast from '../common/BasicToast.vue';

</script>
<template>
  <div class="container">
    <admin-aside />
    <div class="main-content-container">
      <div class="content-wrapper">
        <admin-popular-posts />
        <div class="user-container">
          <admin-user-list />
        </div>
        <admin-category />
        <admin-recycle-bin />
        <basic-toast />
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.darkMode {
  .main-content-container {
    box-shadow: 1px 1px 5px $dim-black !important;
  }
}

.container {
  width: $desktop-width;
  display: flex;
  margin: px-to-rem(40) auto;
  font-family: $secondary-font;

  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media (min-width:768px) and (max-width: 1024px) {
    width: 100%;
  }

  h1 {
    font-size: 1.5rem;
    font-family: $secondary-font-en;
  }

  .main-content-container {
    width: 84%;
    margin-left: auto;
    border: 1px solid #000;
    margin: px-to-rem(30) 0;
    border-radius: px-to-rem(10);
    box-shadow: 5px 5px 5px $light-black;

    @media (max-width: 767px) {
      width: 100%;
      display: flex;
      flex-flow: column wrap;
      margin: 0;
    }

    .content-wrapper {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;

      @media (max-width: 767px) {
        width: 100%;
        display: flex;
        margin: 0;
      }

      .user-container {
        margin: px-to-rem(20);
        width: 40%;

        @media (max-width: 767px) {
          width: 100%;
        }
      }
    }
  }
}
</style>