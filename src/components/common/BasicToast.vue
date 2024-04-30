<script setup lang=ts>
import { useToasterStore } from '@/stores/useToasterStore';

const store = useToasterStore()

</script>
<template>
  <Teleport to="body">
    <div v-if="store.show" class="toast">
      <i class="fa-solid fa-circle-check" v-if="store.status === 'check'"></i>
      <i class="fa-solid fa-circle-xmark" v-else-if="store.status === 'error'"></i>
      {{ store.message }}
    </div>
  </Teleport>
</template>

<style lang='scss' scoped>
.toast {
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  padding: px-to-rem(10) px-to-rem(20);
  background-color: $black-forest;
  color: $pearl;
  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba($color: #333, $alpha: .25);
  animation: toast-bounce .2s linear;

  @media (max-width: 767px) {
    width: 220px;
  }

  i {
    margin-right: px-to-rem(5);
  }

  .fa-circle-check {
    color: #2ecc71;
  }

  .fa-circle-xmark {
    color: crimson;
  }
}
</style>