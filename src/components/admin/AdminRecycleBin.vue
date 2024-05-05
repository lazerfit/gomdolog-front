<script setup lang=ts>
import { formatDate } from '@/utils/FormatDate';
import { usePostDeleteUpdateStore } from '@/stores/usePostDeleteUpdateStore';
import { onBeforeMount } from 'vue';
import { useAdminStore } from '@/stores/useAdminStore';

const adminStore = useAdminStore();

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
  <div class="recyclebin-container" v-if="adminStore.isRecycleBinShow">
    <h1>Recycle Bin</h1>
    <div class="posts" v-if="postStore.deletedPosts.length > 0">
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
    <div class="posts" v-else>
      <div class="empty-img-container">
        <img src="/src/assets/img/box.png" alt="empty-post-img">
        <p>
          Looks like there's nothing here.
        </p>
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

.recyclebin-container {
  margin: 0 px-to-rem(20);
  width: 100%;

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

    .empty-img-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;

      img {
        width: 300px;
        border-radius: 30%;
      }

      p {
        font-family: "Rancho";
        margin-top: 20px;
        font-size: 1.5rem;
      }
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