<script setup lang=ts>
import { usePostResponseStore } from '@/stores/usePostResponseStore';
import { formatDate } from '@/utils/FormatDate';

const store = usePostResponseStore();

</script>
<template>
  <transition name="fade">
    <div class="container" v-if="!store.isPostLoaded">
      <div class="post-wrapper">
        <template v-if="store.posts.content && store.posts.content.length > 0">
          <div class="post" v-for="item in store.posts.content" :key="item.id">
            <img src="../assets/img/pineapples.jpg" alt="all-post-img" v-if="item.thumbnail === 'Default Thumbnail'">
            <img :src="item.thumbnail" v-else>
            <div class="content-wrapper">
              <div class="all-post-category">
                {{ item.categoryTitle }}
              </div>
              <RouterLink :to="{ name: 'post', params: { id: item.id } }">
                <div class="all-post-title">
                  {{ item.title }}
                </div>
                <div class="all-post-text" v-html="item.content">
                </div>
              </RouterLink>
              <div class="all-post-day">
                {{ formatDate(item.createdDate) }}
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="empty-img-container">
            <img src="/src/assets/img/box.png" alt="empty-post-img">
            <p>
              Looks like there's nothing here.
            </p>
          </div>
        </template>
      </div>
    </div>
  </transition>
</template>

<style lang='scss' scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.container {
  width: $desktop-width;
  margin: px-to-rem(50) auto 0 auto;

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

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 50px;
  }

  @media (min-width:768px) and (max-width: 1024px) {
    width: 100%;
    margin-top: 0;
  }

  .post-wrapper {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-top: px-to-rem(50);

    @media screen and (max-width: 767px) {
      width: 100%;
      margin-top: 0;
    }

    @media (min-width:768px) and (max-width: 1024px) {
      justify-content: space-around;
    }

    .post {
      width: px-to-rem(380);
      height: px-to-rem(460);
      margin-top: px-to-rem(25);

      @media screen and (max-width: 767px) {
        width: 100%;
        margin-top: 0;
      }

      img {
        width: 100%;
        height: px-to-rem(260);
        border-radius: px-to-rem(10);
        object-fit: cover;

        @media screen and (max-width: 767px) {
          height: 200px;
        }
      }

      .content-wrapper {
        margin: 0 px-to-rem(10);

        .all-post-category {
          font-family: $secondary-font;
          margin: px-to-rem(5) 0;
          font-size: px-to-rem(14);
          background-color: #f5f5f5;
          width: px-to-rem(50);
          text-align: center;
          padding: px-to-rem(3);
          border-radius: px-to-rem(5);
          margin-bottom: px-to-rem(7);
          cursor: pointer;
        }

        .all-post-title {
          @include sub-post-title
        }

        .all-post-text {
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          line-height: px-to-rem(20);
          height: px-to-rem(80);
          margin-top: px-to-rem(14);
          color: $dim-black;
          cursor: pointer;
        }

        .all-post-day {
          margin-top: px-to-rem(15);
          font-size: px-to-rem(13);
          color: $light-black;
        }
      }
    }
  }
}
</style>