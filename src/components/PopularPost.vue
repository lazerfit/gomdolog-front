<script setup lang=ts>
import { RouterLink } from 'vue-router';
import { usePostResponseStore } from '@/stores/usePostResponseStore';
import { formatDate } from '@/utils/FormatDate';
import { onBeforeMount } from 'vue';

const store = usePostResponseStore();

onBeforeMount(() => {
  store.FETCH_POPULAR()
})

</script>
<template>
  <div class="container" v-if="store.popularPosts.length > 0">
    <div>
      <h1>
        Popular Posts
      </h1>
    </div>
    <div class="post-wrapper">
      <div class="main-post">
        <RouterLink class="main-post-img" :to="{ name: 'post', params: { id: store.popularPosts[0].id } }">
          <img src="@/assets/img/pineapples.jpg" alt="mockup">
        </RouterLink>
        <div class="content-wrapper">
          <div class="main-post-category">
            {{ store.popularPosts[0].categoryTitle }}
          </div>
          <RouterLink :to="{ name: 'post', params: { id: store.popularPosts[0].id } }">
            <div class="main-post-title">
              {{ store.popularPosts[0].title }}
            </div>
            <div class="main-post-text" v-html="store.popularPosts[0].content">
            </div>
          </RouterLink>
          <div class="main-post-day">
            {{ formatDate(store.popularPosts[0].createdDate) }}
          </div>
        </div>
      </div>
      <div class="sub-post-wrapper">
        <div class="sub-post" v-for="item in store.popularPosts.slice(1, 3)" :key="item.id">
          <RouterLink class="sub-post-img" :to="{ name: 'post', params: { id: item.id } }">
            <img src="@/assets/img/pineapples.jpg" alt="mockup">
          </RouterLink>
          <div class="content-wrapper">
            <div class="sub-post-category">
              {{ item.categoryTitle }}
            </div>
            <RouterLink :to="{ name: 'post', params: { id: item.id } }">
              <div class="sub-post-title">
                {{ item.title }}
              </div>
              <div class="sub-post-text" v-html="item.content">
              </div>
            </RouterLink>
            <div class="sub-post-day">
              {{ formatDate(item.createdDate) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.container {
  color: $black-forest;
  width: $desktop-width;
  height: 650px;
  margin: px-to-rem(100) auto;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media (min-width:768px) and (max-width: 1024px) {
    width: 100%;
    margin-top: 60px;
    height: 700px;
  }

  h1 {
    font-weight: 600;
    font-family: $secondary-font-en;
    font-size: px-to-rem(40);
  }

  .post-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    height: px-to-rem(600);
    margin-top: px-to-rem(60);
    justify-content: space-between;

    .main-post {
      width: px-to-rem(570);

      @media (min-width:768px) and (max-width: 1024px) {
        display: none;
      }

      .main-post-img {
        width: 100%;
        height: px-to-rem(265);
        display: block;

        img {
          width: inherit;
          height: inherit;
          object-fit: cover;
          border-radius: px-to-rem(15);
          cursor: pointer;
        }
      }

      .content-wrapper {
        margin: px-to-rem(20) px-to-rem(10);


        .main-post-category {
          @include post-category;
        }

        .main-post-title {
          font-weight: 600;
          font-size: px-to-rem(30);
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          margin-top: px-to-rem(5);
          cursor: pointer;
          color: $black-forest;
          font-family: $secondary-font;

          &:hover {
            text-shadow: 1.5px 1.5px $light-black;
          }
        }

        .main-post-text {
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 9;
          -webkit-box-orient: vertical;
          line-height: px-to-rem(20);
          height: px-to-rem(180);
          margin-top: px-to-rem(14);
          color: $dim-black;
          cursor: pointer;

        }

        .main-post-day {
          margin-top: px-to-rem(30);
          font-size: px-to-rem(13);
          color: $light-black;
        }
      }
    }

    .sub-post-wrapper {
      width: px-to-rem(570);
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media (min-width:768px) and (max-width: 1024px) {
        width: 100%;
        height: 580px;
      }

      .sub-post {
        width: 100%;
        height: px-to-rem(270);
        display: flex;

        .sub-post-img {
          img {
            width: px-to-rem(260);
            height: 100%;
            object-fit: cover;
            border-radius: px-to-rem(10);
            cursor: pointer;

          }
        }

        .content-wrapper {
          margin-left: px-to-rem(10);
          width: px-to-rem(295);

          @media (min-width:768px) and (max-width: 1024px) {
            width: 100%;
          }

          .sub-post-category {
            @include post-category
          }

          .sub-post-title {
            @include sub-post-title;
            display: block;
          }

          .sub-post-text {
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 8;
            -webkit-box-orient: vertical;
            line-height: px-to-rem(20);
            height: px-to-rem(160);
            margin-top: px-to-rem(14);
            color: #555;
            cursor: pointer;
          }

          .sub-post-day {
            margin-top: px-to-rem(15);
            font-size: px-to-rem(13);
            color: #999;
          }
        }
      }
    }
  }
}
</style>