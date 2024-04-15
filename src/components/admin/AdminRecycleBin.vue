<script setup lang=ts>
import { formatDate } from '@/utils/FormatDate';
import { usePostDeleteUpdateStore } from '@/stores/usePostDeleteUpdateStore';
import { onBeforeMount } from 'vue';

const postStore = usePostDeleteUpdateStore();

const revertDelete = (id: number) => {
  postStore.REVERT_DELETE(id);
}

const deletePermanent = (id: number) => {

  postStore.DELETE_PERMANENT(id);
}

onBeforeMount(() => {
  postStore.FETCH_DELETED_POST();
})
</script>
<template>
  <div class="recyclebin-container" v-if="postStore.deletedPosts">
    <h1>Recycle Bin</h1>
    <div class="posts">
      <div class="post" v-for="item in postStore.deletedPosts" :key="item.id">
        <div class="title">
          {{ item.title }}
        </div>
        <div class="date">
          {{ formatDate(item.deletedDate) }}
        </div>
        <div class="btns">
          <i class="fa-solid fa-rotate" @click="revertDelete(item.id)"></i>
          <i class="fa-solid fa-trash" @click="deletePermanent(item.id)"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.recyclebin-container {
  margin: px-to-rem(20);
  width: 40%;

  @media (max-width: 767px) {
    width: 100%;
  }

  .posts {
    border-radius: px-to-rem(10);
    box-shadow: 3px 3px 10px $light-black;
    margin-top: px-to-rem(15);
    padding: px-to-rem(10);

    @media (max-width: 767px) {
      width: 100%;
    }

    .post {
      display: flex;
      gap: px-to-rem(10);
      align-items: center;
      margin: px-to-rem(15);

      .date {
        font-size: 0.8rem;
        color: $light-black;
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
  }
}
</style>