<script setup lang=ts>
import { useDarkModeStore } from '@/stores/useDarkModeStore';

const store = useDarkModeStore();

</script>
<template>
  <div class="container">
    <button @click="store.toggleDarkMode">
      <Transition name="slide-fade">
        <i class="fa-solid fa-sun" v-if="!store.isDarkMode"></i>
        <i class="fa-regular fa-moon" v-else></i>
      </Transition>
    </button>
  </div>
</template>

<style lang='scss' scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.darkMode {
  background-color: transparent;

  button {
    border: 2px solid $pearl !important;

    i {
      color: $pearl;
    }
  }
}

.container {
  width: 30px;
  margin-right: 5px;


  button {
    width: 30px;
    height: 30px;
    border: 2px solid $black-forest;
    background-color: transparent;
    border-radius: 7px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      height: auto;
      font-size: 20px;
    }
  }

  @media screen and (max-width: 767px) {
    width: 30px;
    height: auto;
  }
}
</style>