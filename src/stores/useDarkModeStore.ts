import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useDarkModeStore = defineStore('darkmode-store', () => {
  const isDarkMode = ref(false);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode.value));
    if (isDarkMode.value) {
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
    }
  };

  const setDarkMode = () => {
    const savedSetting = localStorage.getItem('darkMode');
    if (savedSetting) {
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
    }
  };

  return { isDarkMode, toggleDarkMode, setDarkMode };
});
