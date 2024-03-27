import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useToasterStore = defineStore('toaster-store', () => {
  const show = ref(false);
  const message = ref('');

  const showToast = (text: string) => {
    message.value = text;
    show.value = true;
    setTimeout(() => {
      show.value = false;
      message.value = '';
    }, 3000);
  };

  return { show, message, showToast };
});
