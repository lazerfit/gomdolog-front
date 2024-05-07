<script setup lang=ts>
import { ref, defineAsyncComponent } from 'vue';
import { signup, getRole } from '@/api';
import { useToasterStore } from '@/stores/useToasterStore';
import { useLoginStore } from '@/stores/useLoginStore';

const BasicToast = defineAsyncComponent(() =>
  import('@/components/common/BasicToast.vue')
);

const email = ref('');
const password = ref('');

const SIGN_UP = async () => {
  const toast = useToasterStore();
  const loginStore = useLoginStore();
  await signup(email.value, password.value)
    .then((response) => {
      sessionStorage.setItem('_token', response.data.token);
      getRole(response.data.token)
        .then((response) => {
          sessionStorage.setItem('userRole', response.data);
          loginStore.isAdmin = true;
          window.location.href = '/'
        })
        .catch(error => {
          console.log('getRole error : ', error);
          toast.showToast('오류가 발생하였습니다. 다시 시도해주세요', 'error')
        })
    })
    .catch(error => {
      console.log('signUp error : ', error);
      toast.showToast('오류가 발생하였습니다. 다시 시도해주세요', 'error')
    })
}
</script>
<template>
  <div class="container">
    <basic-toast />
    <h1>Sign Up</h1>
    <input type="text" class="email" v-model="email" placeholder="email">
    <input type="password" class="password" v-model="password" placeholder="password">
    <button class="submit-btn" @click="SIGN_UP">Sign Up</button>
  </div>
</template>

<style lang='scss' scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Rancho";

  h1 {
    margin-bottom: 7px;
  }

  input {
    border-radius: 5px;
    border: none;
    margin: 5px;
    height: 30px;
    font-family: "Rancho";
    width: 150px;
    font-size: 1.2rem;

    &:focus::placeholder {
      opacity: 0;
    }

    &::placeholder {
      font-family: "Rancho";
      padding-left: 5px;
      transition: all .3s ease-in-out;
    }
  }

  .submit-btn {
    border: none;
    margin: 5px;
    padding: 7px;
    border-radius: 5px;
    font-family: "Rancho";
    cursor: pointer;

    &:hover {
      background-color: hotpink;
      color: #fff;
    }
  }
}
</style>