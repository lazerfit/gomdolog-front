<script setup lang=ts>
import { useLoaderStore } from '@/stores/useLoaderStore';

const store = useLoaderStore();

</script>
<template>
  <div class="loader" v-if="store.isLoaded">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</template>

<style lang='scss' scoped>
.loader {
  display: inline-block;
  gap: 0.25rem;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50%, -50%;

  .dot {
    display: inline-block;
    margin-right: 0.25rem;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #121212;
    animation: bounce .5s infinite alternate;

    &:nth-child(2) {
      animation-delay: 100ms;
    }

    &:nth-child(3) {
      animation-delay: 200ms;
    }
  }
}



@keyframes bounce {
  to {
    translate: 0 -0.25rem;
  }
}
</style>