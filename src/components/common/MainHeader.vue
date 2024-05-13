<script setup lang=ts>
import { onBeforeMount, onBeforeUnmount, ref } from 'vue';
import { RouterLink } from 'vue-router';
import MobileSidebar from '../MobileSidebar.vue';
import SearchBar from './SearchBar.vue';
import DarkmodeToggle from './DarkmodeToggle.vue';
import { defineAsyncComponent } from 'vue';
import { useLoginStore } from '@/stores/useLoginStore';

const isModalOpened = ref(false);
const isAdminMenuOpened = ref(false);
const loginStore = useLoginStore();

const BasicModal = defineAsyncComponent(() =>
  import('./BasicModal.vue')
);

const BasicToast = defineAsyncComponent(() =>
  import('./BasicToast.vue')
);

const openModal = () => {
  isModalOpened.value = true;
}

const closeModal = () => {
  isModalOpened.value = false;
}

const submitHandler = () => {
  console.log("정상 제출 완료");
}

const signIn = () => {
  loginStore.SIGN_IN()
  closeModal()
}

const logout = () => {
  loginStore.isAdmin = false;
  sessionStorage.removeItem('userRole');
}

const isAdmin = () => {
  if (sessionStorage.getItem('userRole') === null || sessionStorage.getItem('useRole') === 'USER') {
    loginStore.isAdmin = false;
  } else {
    loginStore.isAdmin = true;
  }
}

onBeforeMount(() => {
  isAdmin()
})

onBeforeUnmount(() => {
  loginStore.isAdmin = false;
})

</script>

<template>
  <header>
    <RouterLink class="main-logo" to="/">
      <img src="@/assets/img/gomdolog3.png" alt="main-logo">
    </RouterLink>
    <darkmode-toggle />
    <mobile-sidebar />
    <basic-toast />
    <div class="sub-logo-container">
      <search-bar />
      <span class="login">
        <i class="fa-regular fa-user" @click="openModal" v-if="!loginStore.isAdmin"></i>
        <i class="fa-solid fa-user" @click="isAdminMenuOpened = !isAdminMenuOpened" v-else>
          <Transition name="bounce">
            <div class="wrapper" v-show="isAdminMenuOpened">
              <div>
                <RouterLink to="/post/new">글쓰기</RouterLink>
              </div>
              <div>
                <RouterLink to="/admin">설정</RouterLink>
              </div>
              <div>
                <a href="#none" @click="logout">로그아웃</a>
              </div>
            </div>
          </Transition>
        </i>
        <Transition name="fade">
          <basic-modal :isOpen="isModalOpened" @modal-close="closeModal" @submit="submitHandler">
            <template #header>
              <div class="modal-header-container">
                <div class="close-btn">
                  <i class="fa-solid fa-x" @click="closeModal"></i>
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
      </span>
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
  width: $desktop-width;
  margin: px-to-rem(15) auto px-to-rem(10) auto;
  display: flex;
  align-items: center;
  background-color: #fff;
  position: sticky;
  top: 0;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 0 auto;
  }

  @media (min-width:768px) and (max-width: 1024px) {
    width: 100%;
  }

  .main-logo {
    @media screen and (max-width: 767px) {
      margin: 0 auto;
      padding-left: 60px;
    }

    img {
      width: px-to-rem(250);

      @media screen and (max-width: 767px) {
        width: 200px;
      }
    }
  }

  .sub-logo-container {
    margin-left: auto;
    display: flex;

    @media screen and (max-width: 767px) {
      display: none;
    }

    .login {
      margin-right: px-to-rem(5);

      .fa-user {
        font-size: px-to-rem(23);
        cursor: pointer;
        position: relative;

        .wrapper {
          position: absolute;
          border: 1px solid #000;
          width: px-to-rem(65);
          top: 100%;
          left: px-to-rem(-65);
          transform: translateX(35%);
          margin-top: px-to-rem(10);
          background-color: #fff;
          box-shadow: 3px 3px 5px $light-black;

          div {
            text-align: center;
            padding: px-to-rem(5);

            &:hover {
              background-color: $black-forest;

              a {
                color: $pearl;
              }
            }

            a {
              font-size: px-to-rem(13);
              cursor: pointer;
              font-family: $secondary-font;
              color: $black-forest;
            }
          }
        }
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