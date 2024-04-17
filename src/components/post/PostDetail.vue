<script setup lang=ts>
import { ref, onBeforeMount, onMounted } from 'vue';
import type { Ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useToasterStore } from '@/stores/useToasterStore';
import { usePostResponseStore } from '@/stores/usePostResponseStore';
import { defineAsyncComponent } from 'vue';
import { formatDate } from '@/utils/FormatDate';
import { usePostDeleteUpdateStore } from '@/stores/usePostDeleteUpdateStore';
import { RouterLink } from 'vue-router';

const utterancesContainer: Ref<HTMLDivElement | null> = ref(null);
const router = useRouter();
const route = useRoute();
const toastStore = useToasterStore();
const postResponseStore = usePostResponseStore();
const postDeleteUpdateStore = usePostDeleteUpdateStore();

const BasicToast = defineAsyncComponent(() =>
  import('../common/BasicToast.vue')
);

const addUtterancesScript = () => {
  if (utterancesContainer.value !== null) {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "lazerfit/gomdolog-front");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-light");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;
    utterancesContainer.value.appendChild(script);
  } else {
    console.error("utterancesContainer is null.");
  }
}

const goBack = () => {
  router.go(-1);
};

const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
};

const linkCopy = () => {
  const url = window.location.href;
  navigator.clipboard.writeText(url)
    .then(() => {
      toastStore.showToast("복사가 완료되었습니다.");
    }).catch((error: string) => {
      console.log('링크 복사 중 오류 발생: ', error);
    })
}

const deletePost = () => {
  postDeleteUpdateStore.DELETE(route.params.id)
}

const isVisitedPost = () => {
  const visitedPost = localStorage.getItem('visitedPost');
  return visitedPost ? visitedPost.includes(route.params.id as string) : false;
}

onMounted(() => {
  addUtterancesScript();
});

onBeforeMount(() => {
  postResponseStore.FETCH_POST(route.params.id);
  if (!isVisitedPost()) {
    postResponseStore.ADD_VIEWS(route.params.id as string)
    const visitedPost = JSON.parse(localStorage.getItem('visitedPost'));
    visitedPost.push(route.params.id);
    localStorage.setItem('visitedPost', JSON.stringify(visitedPost));
  }
});

</script>

<template>
  <div class="container">
    <div class="content-wrapper">
      <div class="post-title">
        <div class="post-title-tags">
          <span v-for="(tag, index) in postResponseStore.post.tags" :key="index">#{{ tag }}</span>
        </div>
        <div class="title">
          {{ postResponseStore.post.title }}
        </div>
        <div class="date-admin-wrapper">
          <div class="created-date">
            {{ formatDate(postResponseStore.post.createdDate) }}
          </div>
          <div class="admin-wrapper">
            <RouterLink :to="{ name: 'post-update', params: { id: route.params.id } }">
              <span>
                <i class="fa-solid fa-pen"></i>
              </span>
            </RouterLink>
            <span>
              <i class="fa-solid fa-trash" @click="deletePost"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="post-text" v-html="postResponseStore.post.content">
      </div>
      <div class="sns">
        <div class="back-btn">
          <i class="fa-solid fa-chevron-left" @click="goBack"></i>
        </div>
        <div class="wrapper">
          <span>
            <i class="fa-brands fa-x-twitter"></i>
          </span>
          <span>
            <i class="fa-brands fa-facebook"></i>
          </span>
          <span>
            <i class="fa-regular fa-comment"></i>
          </span>
          <span>
            <basic-toast />
            <i class="fa-solid fa-paperclip" @click="linkCopy"></i>
          </span>
        </div>
        <div class="up-btn">
          <i class="fa-solid fa-chevron-up" @click="scrollToTop"></i>
        </div>
      </div>
      <div class="comment">
        <div ref="utterancesContainer"></div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.darkMode {
  .admin-wrapper {

    span {

      i {

        &:hover {
          color: $pearl !important;
        }
      }
    }
  }
}

.container {
  width: $desktop-width;
  margin: px-to-rem(40) auto;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (min-width:768px) and (max-width: 1024px) {
    width: 100%;
  }

  .content-wrapper {
    width: px-to-rem(900);

    .post-title {
      text-align: center;
      font-weight: 500;
      font-family: $secondary-font;

      .title {
        font-size: px-to-rem(35);
      }

      .post-title-tags {
        span {
          font-size: 0.9rem;
          color: #ffda79;
          margin-right: px-to-rem(7);
        }
      }

      .date-admin-wrapper {
        font-size: 0.8rem;
        margin-top: px-to-rem(10);
        color: $light-black;
        display: flex;
        justify-content: center;
        flex-direction: column;

        .created-date {
          font-size: 0.9rem;
        }

        .admin-wrapper {
          margin-top: px-to-rem(7);

          span {
            margin-right: px-to-rem(10);

            i {
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

    .post-text {
      margin: px-to-rem(30) auto;
      font-size: px-to-rem(16);
      line-height: px-to-rem(31);

      @media (max-width: 767px) {
        margin: 30px 10px;
      }

      @media (min-width:768px) and (max-width: 1024px) {
        margin: 30px 20px;
      }

      img {
        width: 100%;
        border-radius: px-to-rem(10);
        margin: px-to-rem(30) auto;
      }
    }

    .sns {
      display: flex;
      justify-content: space-between;

      .wrapper {
        transition: all .3s ease;

        &:hover span i {
          opacity: .5;
        }

        span {


          i {
            transition: all .3s ease;
            font-size: 1.25rem;

            &:hover {
              transform: translateY(-5px) scale(1.1);
              opacity: 1;
            }
          }
        }
      }

      .back-btn {
        cursor: pointer;
        color: $light-black;

        .fa-chevron-left {
          font-size: px-to-rem(17);

          &:hover {
            animation: back-btn 1.1s linear infinite;
          }
        }
      }

      .up-btn {
        cursor: pointer;
        color: $light-black;

        .fa-chevron-up {
          font-size: px-to-rem(17);

          &:hover {
            animation: up-btn 1.1s linear infinite;
          }
        }
      }

      span {
        font-size: px-to-rem(22);
        margin-right: px-to-rem(7);
        cursor: pointer;

      }
    }

    .comment {
      margin-top: px-to-rem(40);
    }
  }
}
</style>