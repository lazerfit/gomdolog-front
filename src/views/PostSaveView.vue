<script setup lang=ts>
import MainHeader from '@/components/common/MainHeader.vue';
import PostSave from '@/components/post/PostSave.vue';
import { onBeforeRouteLeave } from 'vue-router';


onBeforeRouteLeave((to, from) => {
  const answer = window.confirm("현재 진행 상태가 삭제될 수 있습니다.\n정말 나가시겠습니까?");
  if (!answer) return false;
})

</script>
<template>
  <div class="container">
    <main-header />
    <post-save />
  </div>
</template>

<style lang='scss' scoped></style>