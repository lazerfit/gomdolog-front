import { ref } from 'vue';
import { defineStore } from 'pinia';
import { fetchTop5Post } from '@/api';
import type { AdminPopularPost } from '@/utils/types';

export const useAdminStore = defineStore('admin-store', () => {
  const popularPosts = ref<AdminPopularPost[]>([]);
  const isUserShow = ref(false);
  const isDashboardShow = ref(true);
  const isCategoryShow = ref(false);
  const isRecycleBinShow = ref(false);

  const FETCH_POPULAR_POST = async () => {
    await fetchTop5Post()
      .then((response) => (popularPosts.value = response.data))
      .catch((error) => console.log('admin popular posts error: ', error));
  };

  return {
    isUserShow,
    isDashboardShow,
    isCategoryShow,
    popularPosts,
    FETCH_POPULAR_POST,
    isRecycleBinShow
  };
});
