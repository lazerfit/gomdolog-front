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
import { useLoginStore } from '@/stores/useLoginStore';
import { ToasterStatus } from '@/utils/types';
import { useQuery } from '@tanstack/vue-query';
import { fetchPost } from '@/api';
import type { Post } from '@/utils/types';
import TheLoader from '../common/TheLoader.vue';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'

const utterancesContainer: Ref<HTMLDivElement | null> = ref(null);
const router = useRouter();
const route = useRoute();
const toastStore = useToasterStore();
const postResponseStore = usePostResponseStore();
const postDeleteUpdateStore = usePostDeleteUpdateStore();
const loginStore = useLoginStore();
const fetchEnable = ref(false);

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
      toastStore.showToast("복사가 완료되었습니다.", ToasterStatus.CHECK);
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

const shareTwitter = () => {
  window.open('https://twitter.com/intent/tweet?url=' + document.URL + '&text=' + postResponseStore.post?.title, "_blank", "width=450,height=500")
}

const postId = route.params.id as string;

const useFetchPostQuery = () => {
  return useQuery<Post>({
    queryKey: ['post', postId],
    queryFn: () => fetchPost(postId).then(response => response.data),
    staleTime: 60 * 60 * 24 * 1000,
    enabled: fetchEnable,
  })
}

const { isSuccess, data, isPending } = useFetchPostQuery();

const highlightCode = () => {
  document.querySelectorAll('pre code').forEach(block => {
    hljs.highlightElement(block as HTMLElement)
  })
}

onBeforeMount(() => {
  fetchEnable.value = true;
  if (!isVisitedPost() && !loginStore.isAdmin) {
    postResponseStore.ADD_VIEWS(route.params.id as string)
    const visitedPostString = localStorage.getItem('visitedPost') || '';
    const visitedPost = JSON.parse(visitedPostString);
    visitedPost.push(route.params.id);
    localStorage.setItem('visitedPost', JSON.stringify(visitedPost));
  }
});

onMounted(() => {
  addUtterancesScript();
  highlightCode()
});

</script>

<template>
  <div v-if="isPending">
    <the-loader />
  </div>
  <div class="container">

    <div class="content-wrapper" v-if="isSuccess && (data != undefined)">
      <div class="post-title">
        <div class="post-title-tags">
          <span v-for="(tag, index) in (data && data.tags)" :key="index">#{{ tag
            }}</span>
        </div>
        <div class="title">
          {{ data.title || '' }}
        </div>
        <div class="date-admin-wrapper">
          <div class="created-date">
            {{ formatDate(data.createdDate || '') }}
          </div>
          <div class="admin-wrapper" v-if="loginStore.isAdmin">
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
      <div class="post-text" v-html="data.content || ''">
      </div>
      <div class="sns">
        <div class="back-btn">
          <i class="fa-solid fa-chevron-left" @click="goBack"></i>
        </div>
        <div class="wrapper">
          <span>
            <i class="fa-brands fa-x-twitter" @click="shareTwitter"></i>
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
    </div>
    <div class="comment">
      <div ref="utterancesContainer"></div>
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
  flex-direction: column;
  align-items: center;


  @media (max-width: 767px) {
    width: 100%;
  }

  @media (min-width:768px) and (max-width: 1024px) {
    width: 100%;
  }

  .comment {
    margin-top: px-to-rem(40);
    width: px-to-rem(900);

    @media (max-width: 767px) {
      width: 100%;
    }

    @media (min-width:768px) and (max-width: 1024px) {
      width: 100%;
    }
  }

  .content-wrapper {
    width: px-to-rem(900);

    @media (max-width: 767px) {
      width: 100%;
    }

    @media (min-width:768px) and (max-width: 1024px) {
      width: 100%;
    }

    .post-title {
      text-align: center;
      font-weight: 500;
      font-family: $secondary-font;

      .title {
        font-size: px-to-rem(35);

        @media (max-width: 767px) {
          font-size: px-to-rem(44);
        }
      }

      .post-title-tags {
        span {
          font-size: 0.9rem;
          color: #ffda79;
          margin-right: px-to-rem(7);

          @media (max-width: 767px) {
            font-size: 1.2rem;
          }
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
      font-size: px-to-rem(18);
      line-height: px-to-rem(31);
      white-space: pre-wrap;
      word-wrap: break-word;

      @media (max-width: 767px) {
        margin: 30px 10px;
        font-size: px-to-rem(28);
      }

      @media (min-width:768px) and (max-width: 1024px) {
        margin: 30px 20px;
      }
    }

    .post-text:deep(p) {
      font-size: px-to-rem(18);
      line-height: px-to-rem(24);
    }

    .post-text:deep(h1) {
      font-size: px-to-rem(24);
      line-height: px-to-rem(38.4);
    }

    .post-text:deep(h2) {
      font-size: px-to-rem(20);
      line-height: px-to-rem(32);
    }

    .post-text:deep(img) {
      max-width: 900px;
      border-radius: px-to-rem(10);
      margin: px-to-rem(30) auto;
      object-fit: cover;
      display: block;
      margin: 20px auto;

      @media (max-width: 767px) {
        max-width: 330px;
      }
    }

    .post-text:deep(a) {
      text-decoration: none;
      color: #fff !important;
      white-space: pre-wrap;
      word-wrap: break-word;

      &:link {
        color: #fff !important;
      }

      &:visited {
        color: blueviolet !important;
      }

      &:hover {
        color: #2c974b !important;
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
  }
}
</style>