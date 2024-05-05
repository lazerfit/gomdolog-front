<script setup lang=ts>
import { useAdminStore } from '@/stores/useAdminStore';
import { onBeforeMount } from 'vue';

const adminStore = useAdminStore();

onBeforeMount(() => {
  adminStore.FETCH_POPULAR_POST();
})

</script>
<template>
  <div class="popular-post" v-if="adminStore.popularPosts.length > 0 && adminStore.isDashboardShow">
    <h1>Popular Posts</h1>
    <div class="posts">
      <div class="post" v-for="(item, index) in adminStore.popularPosts" :key="index">
        <div class="post-title">
          {{ item.title }}
        </div>
        <div class="views">
          {{ item.views }}views
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.darkMode {
  .posts {
    box-shadow: 1px 1px 5px $dim-black !important;
  }
}

.popular-post {
  margin: px-to-rem(20);
  width: 100%;

  @media (max-width: 767px) {
    width: 100%;
  }

  .posts {
    border-radius: px-to-rem(10);
    box-shadow: 3px 3px 10px $light-black;
    margin-top: px-to-rem(15);
    padding: px-to-rem(10);

    .post {
      display: flex;
      margin: px-to-rem(15);

      .post-title {
        width: px-to-rem(600);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

        @media (max-width: 767px) {
          width: 220px;
        }
      }

      .views {
        margin-left: auto;
      }
    }
  }
}
</style>