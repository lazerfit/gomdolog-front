<script setup lang=ts>
import { onBeforeMount, onBeforeUnmount } from 'vue';
import { RouterLink } from 'vue-router';
import MobileSidebar from '../MobileSidebar.vue';
import { defineAsyncComponent } from 'vue';
import { useLoginStore } from '@/stores/useLoginStore';
import { useDarkModeStore } from '@/stores/useDarkModeStore';
import DarkmodeToggle3 from './DarkmodeToggle3.vue';
import TheLoginButton from './TheLoginButton.vue';
import TheAdminMenu from './TheAdminMenu.vue';
import TheAdminMenuBar from './TheAdminMenuBar.vue';

const loginStore = useLoginStore();
const darkmodeStore = useDarkModeStore();

const BasicModal = defineAsyncComponent(() =>
  import('@/components/common/BasicModal.vue')
);

const BasicToast = defineAsyncComponent(() =>
  import('@/components/common/BasicToast.vue')
);

const submitHandler = () => {
  console.log("정상 제출 완료");
}

const signIn = () => {
  loginStore.SIGN_IN()
}

const isAdmin = () => {
  if (sessionStorage.getItem('userRole') === null || sessionStorage.getItem('useRole') === 'USER') {
    loginStore.isAdmin = false;
  } else {
    loginStore.isAdmin = true;
  }
}

const isDarkMode = () => {
  if (localStorage.getItem('darkMode') && localStorage.getItem('darkMode') === 'true') {
    darkmodeStore.isDarkMode = true
  } else {
    darkmodeStore.isDarkMode = false
  }
}

onBeforeMount(() => {
  isAdmin();
  isDarkMode();
})

onBeforeUnmount(() => {
  loginStore.isAdmin = false;
})

</script>

<template>
  <header>
    <basic-toast />
    <div class="sub-logo-container">
      <RouterLink class="main-logo" to="/">
        <img src="@/assets/img/gomdolog3.png" alt="main-logo">
      </RouterLink>
      <mobile-sidebar />
      <div class="login">
        <DarkmodeToggle3 />
        <the-login-button />
        <the-admin-menu />
        <the-admin-menu-bar />
        <Transition name="fade">
          <basic-modal :isOpen="loginStore.isModalOpened" @modal-close="loginStore.isModalOpened = false"
            @submit="submitHandler" @keyup.esc="loginStore.isModalOpened = false">
            <template #header>
              <div class="modal-header-container">
                <div class="close-btn">
                  <i class="fa-solid fa-x" @click="loginStore.isModalOpened = false"></i>
                </div>
                <div class="login-welcome">
                  <img src="/src/assets/img/cat4.jpg" alt="login-welcome-img">
                </div>
              </div>
            </template>
            <template #body>
              <div class="modal-body-container">
                <div class="login-field">
                  <div>
                    <input type="email" placeholder="이메일" required v-model="loginStore.signInForm.email">
                  </div>
                  <div>
                    <input type="password" placeholder="비밀번호" required v-model="loginStore.signInForm.password"
                      @keyup.enter="signIn">
                  </div>
                  <button class="btn-member-primary" @click="signIn">로그인</button>
                </div>
              </div>
            </template>
            <template #footer>
              <div>
              </div>
            </template>
          </basic-modal>
        </Transition>
      </div>
    </div>
  </header>
</template>

<style lang='scss' scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease-in-out;
}

.darkMode {
  .main-logo {
    img {
      filter: invert(100%);
    }
  }

  header {
    background-color: #121212 !important;
  }
}

header {
  width: 100%;
  margin: px-to-rem(15) auto px-to-rem(10) auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  position: sticky;
  padding: 15px 10px;
  top: 0;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 0 auto;
    padding: 3px;
  }

  @media (min-width:768px) and (max-width: 1024px) {
    width: 100%;
  }

  .sub-logo-container {
    width: 1180px;
    display: flex;
    align-items: center;

    .main-logo {
      @media screen and (max-width: 767px) {
        padding: 14px 13px 13px 13px;
        margin-right: auto;
      }

      img {
        width: px-to-rem(130);

        @media screen and (max-width: 767px) {
          width: 100px;
        }
      }
    }

    .login {
      margin-right: px-to-rem(5);
      margin-left: auto;
      display: flex;
      align-items: center;

      @media screen and (max-width: 767px) {
        display: none;
      }

      .fa-user {
        font-size: px-to-rem(23);
        cursor: pointer;
        position: relative;
      }

      .fa-x {
        font-size: px-to-rem(10);
        margin-left: auto;
      }

      .modal-header-container {
        display: flex;
        flex-direction: column;

        .close-btn {
          margin-left: auto;
          color: $light-black;

          i {
            cursor: pointer;
          }
        }

        .login-welcome {
          img {
            width: 100%;
            border-radius: px-to-rem(20);
            margin-top: px-to-rem(10);

          }
        }
      }

      .modal-body-container {
        margin-bottom: 15px;

        .login-field {
          button {
            cursor: pointer;
          }

          div {
            :is(input[type=email], input[type=password]) {
              border: 1px solid $dim-gray;
              padding: px-to-rem(13);
              border-radius: px-to-rem(5);
              width: 100%;
              margin-top: px-to-rem(10);
              font-family: $secondary-font;

              &::placeholder {
                color: $dark-gray;
                transition: all .3s ease;
              }

              &:focus::placeholder {
                opacity: 0;
              }
            }
          }

          .btn-member-primary {
            padding: px-to-rem(13);
            border-radius: px-to-rem(5);
            width: 100%;
            margin-top: px-to-rem(10);
            background-color: $black-forest;
            color: $pearl;
            transition: all .3s ease-in-out;
            font-family: $secondary-font;

            &:hover {
              @include box-shadow-animation($silver-black);
            }
          }
        }
      }
    }
  }
}
</style>