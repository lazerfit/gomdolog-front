import { ref } from 'vue';
import { defineStore } from 'pinia';
import { ToasterStatus, type CategoryResponse } from '@/utils/types';
import { fetchCategoryAll, deleteCategory, saveCategory, updateCategory } from '@/api';
import { useToasterStore } from './useToasterStore';

export const useCategoryResponseStore = defineStore('category-response-store', () => {
  const categories = ref<CategoryResponse[]>([]);
  const divList = ref([]);
  const updateTitle = ref('');

  const FETCH_ALL = async () => {
    await fetchCategoryAll()
      .then((response) => {
        const responseWithIsEditMode = response.data.map((category: CategoryResponse) => {
          return {
            ...category,
            isEditable: false
          };
        });
        categories.value = responseWithIsEditMode;
      })
      .catch((error) => console.log(error));
  };

  const DELETE = async (id: number) => {
    const toast = useToasterStore();

    await deleteCategory(id)
      .then(() => {
        FETCH_ALL();
        toast.showToast('삭제가 완료되었습니다.', ToasterStatus.CHECK);
      })
      .catch((error) => console.log(error));
  };

  const SAVE_CATEGORY = async (data: string) => {
    const toast = useToasterStore();
    await saveCategory({
      title: data
    })
      .then(() => {
        divList.value = [];
        FETCH_ALL();
        toast.showToast('저장이 완료되었습니다.', ToasterStatus.CHECK);
      })
      .catch((error) => console.log(error));
  };

  const UPDATE_CATEGORY = async (id: number) => {
    await updateCategory({
      id: id,
      title: updateTitle.value
    })
      .then(() => {
        FETCH_ALL();
        updateTitle.value = '';
      })
      .catch((error) => console.log(error));
  };

  return { categories, divList, updateTitle, FETCH_ALL, DELETE, SAVE_CATEGORY, UPDATE_CATEGORY };
});
