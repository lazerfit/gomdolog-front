import { ref } from 'vue';
import { defineStore } from 'pinia';
import { submitSigninForm, getRole } from '@/api';
import { type SigninForm, ToasterStatus } from '@/utils/types';
import { useToasterStore } from './useToasterStore';

export const useLoginStore = defineStore('login-store', () => {
  const isAdmin = ref(false);

  const signInForm = ref<SigninForm>({
    email: '',
    password: ''
  });

  const SIGN_IN = async () => {
    const toast = useToasterStore();
    await submitSigninForm(signInForm.value)
      .then((response) => {
        sessionStorage.setItem('_token', response.data.token);
        signInForm.value.password = '';
        getRole(response.data.token)
          .then((response) => {
            sessionStorage.setItem('userRole', response.data);
            isAdmin.value = true;
            toast.showToast('로그인이 완료되었습니다. 🎉', ToasterStatus.CHECK);
          })
          .catch((error) => {
            console.log('getRole error : ', error);
            toast.showToast('이메일 또는 비밀번호가 잘못되었습니다.', ToasterStatus.ERROR);
          });
      })
      .catch((error) => console.log('login error : ', error));
  };

  return { isAdmin, SIGN_IN, signInForm };
});
