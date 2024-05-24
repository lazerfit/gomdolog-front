<script setup lang=ts>
import { useLoginStore } from '@/stores/useLoginStore';

const loginStore = useLoginStore();
</script>
<template>
  <div class="wrapper" v-if="loginStore.isAdmin">
    <button class="button" data-text="Awesome" @click="loginStore.isAdminMenuOpened = !loginStore.isAdminMenuOpened">
      <span class="actual-text">&nbsp;menu&nbsp;</span>
      <span aria-hidden="true" class="hover-text">&nbsp;menu&nbsp;</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 767px) {
  .wrapper {
    display: none;
  }
}

@include the-menu
</style>