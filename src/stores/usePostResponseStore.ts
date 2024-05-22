import type { PostPageResponse } from './../utils/types';
import { ref } from 'vue';
import { defineStore } from 'pinia';
import {
  fetchPost,
  fetchPostAll,
  fetchPopularPost,
  searchPostByTitle,
  searchPostByCategory,
  addViews
} from '@/api';
import type { Post, PostResopnseWithoutTags } from '@/utils/types';
import { useLoaderStore } from './useLoaderStore';
import { useRoute, useRouter } from 'vue-router';

export const usePostResponseStore = defineStore('post-response-store', () => {
  const posts = ref<PostPageResponse | null>(null);
  const popularPosts = ref<PostResopnseWithoutTags[] | null>([]);
  const searchQuery = ref('');
  const isPostLoaded = ref(false);
  const route = useRoute();
  const pageSize = ref(6);

  const post = ref<Post | null>({
    id: 0,
    title: 'default',
    content: 'default',
    createdDate: 'default',
    thumbnail: 'default',
    categoryTitle: 'default',
    tags: ['default']
  });

  const FETCH_MAIN_PAGE = async () => {
    const loaderStore = useLoaderStore();
    loaderStore.isLoaded = true;
    isPostLoaded.value = true;
    try {
      await fetchPostAll(pageSize.value).then((response) => (posts.value = response.data));
      await fetchPopularPost()
        .then((response) => (popularPosts.value = response.data))
        .catch((error) => console.log('popularPost error: ', error));
    } catch (error) {
      console.log(error);
    } finally {
      loaderStore.isLoaded = false;
      isPostLoaded.value = false;
    }
  };

  const FETCH_POST = async (postId: string | string[]) => {
    const router = useRouter();
    const loaderStore = useLoaderStore();
    loaderStore.isLoaded = true;
    isPostLoaded.value = true;
    try {
      await fetchPost(postId)
        .then((response) => {
          post.value = response.data;
        })
        .catch((error) => {
          router.push('/404');
          console.error('Error fetching post: ', error);
        });
    } catch (error) {
      console.error('Error fetching post: ', error);
    } finally {
      loaderStore.isLoaded = false;
      isPostLoaded.value = false;
    }
  };

  const FETCH_POPULAR = async () => {
    isPostLoaded.value = true;
    try {
      await fetchPopularPost()
        .then((response) => {
          popularPosts.value = response.data;
        })
        .catch((error) => console.log('Error fetching post: ', error));
    } finally {
      isPostLoaded.value = false;
    }
  };

  const FETCH_ALL = async (pageSize: number) => {
    const loaderStore = useLoaderStore();
    loaderStore.isLoaded = true;
    isPostLoaded.value = true;
    try {
      await fetchPostAll(pageSize)
        .then((response) => {
          posts.value = response.data;
        })
        .catch((error) => console.log('Error fetching post: ', error));
    } finally {
      loaderStore.isLoaded = false;
      isPostLoaded.value = false;
    }
  };

  const BY_TITLE_SEARCH = async () => {
    const loaderStore = useLoaderStore();
    loaderStore.isLoaded = true;
    isPostLoaded.value = true;
    try {
      await searchPostByTitle(route.params.q)
        .then((response) => {
          posts.value = response.data;
        })
        .catch((error) => console.log('Error fetching post: ', error));
    } finally {
      loaderStore.isLoaded = false;
      isPostLoaded.value = false;
    }
  };

  const BY_CATEGORY_SEARCH = async (categoryTitle: string | string[]) => {
    const loaderStore = useLoaderStore();
    loaderStore.isLoaded = true;
    isPostLoaded.value = true;
    try {
      await searchPostByCategory(categoryTitle)
        .then((response) => {
          posts.value = response.data;
        })
        .catch((error) => console.log('Error fetching post: ', error));
    } finally {
      loaderStore.isLoaded = false;
      isPostLoaded.value = false;
    }
  };

  const ADD_VIEWS = async (id: string) => {
    await addViews(id)
      .then()
      .catch((error) => console.log(error));
  };

  return {
    post,
    posts,
    popularPosts,
    isPostLoaded,
    searchQuery,
    pageSize,
    FETCH_POST,
    FETCH_ALL,
    FETCH_POPULAR,
    BY_TITLE_SEARCH,
    BY_CATEGORY_SEARCH,
    FETCH_MAIN_PAGE,
    ADD_VIEWS
  };
});
