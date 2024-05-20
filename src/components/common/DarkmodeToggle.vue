<script setup lang=ts>
import { useDarkModeStore } from '@/stores/useDarkModeStore';

const store = useDarkModeStore();

</script>
<template>
  <div class="container">
    <button @click="store.toggleDarkMode">
      <Transition name="fade">
        <i class="fa-solid fa-sun" v-if="!store.isDarkMode"></i>
        <i class="fa-regular fa-moon" v-else></i>
      </Transition>
    </button>
  </div>
</template>

<style lang='scss' scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
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
    position: relative;

    i {
      height: auto;
      font-size: 20px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  @media screen and (max-width: 767px) {
    width: 30px;
    height: auto;
  }
}
</style>