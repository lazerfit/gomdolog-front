<script setup lang=ts>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import BasicModal from './BasicModal.vue';
import MobileSidebar from '../MobileSidebar.vue';
import SearchBar from './SearchBar.vue';

const isModalOpened = ref(false);
const isLoginMenuOpened = ref(false);

const openModal = () => {
  isModalOpened.value = true;
}

const closeModal = () => {
  isModalOpened.value = false;
}

const submitHandler = () => {
  console.log("정상 제출 완료");
}
</script>

<template>
  <header>
    <RouterLink class="main-logo" to="/">
      <img src="@/assets/img/gomdol2.jpg" alt="main-logo">
    </RouterLink>
    <mobile-sidebar />
    <div class="sub-logo-container">
      <search-bar />
      <span class="login">
        <!-- <i class="fa-regular fa-user" @click="openModal"></i> -->
        <i class="fa-solid fa-user" @click="isLoginMenuOpened = !isLoginMenuOpened">
          <Transition name="bounce">
            <div class="wrapper" v-show="isLoginMenuOpened">
              <div>
                <RouterLink to="/post/new">글쓰기</RouterLink>
              </div>
              <div>
                <RouterLink to="/admin">설정</RouterLink>
              </div>
              <div>
                <a href="#none">로그아웃</a>
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
                  <form action="#none">
                    <div>
                      <input type="email" placeholder="이메일" required>
                    </div>
                    <div>
                      <input type="password" placeholder="비밀번호" required>
                    </div>
                    <button class="btn-member-primary">로그인</button>
                  </form>
                </div>
              </div>
            </template>
            <template #footer>
              <div class="modal-footer-container">
                <div class="easy-login-title">
                  간편 로그인
                </div>
                <div class="easy-login">
                  <div>
                    <button class="google"></button>
                  </div>
                  <div>
                    <button class="naver"></button>
                  </div>
                </div>
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

header {
  width: $desktop-width;
  margin: px-to-rem(15) auto px-to-rem(10) auto;
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media (min-width:768px) and (max-width: 1024px) {
    width: 100%;
  }

  .main-logo {
    @media screen and (max-width: 767px) {
      margin: 0 auto;
      padding-left: 20px;
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

      .modal-footer-container {
        display: flex;
        flex-direction: column;
        margin: px-to-rem(20) 0;

        .easy-login-title {
          color: $dark-gray;
          text-align: center;
          font-size: 0.9rem;
        }

        .easy-login {
          display: flex;
          margin: px-to-rem(20) auto 0 auto;
          gap: px-to-rem(10);

          button {
            width: px-to-rem(80);
            height: px-to-rem(80);
            border: none;
            background-color: transparent;
            border-radius: px-to-rem(10);
            cursor: pointer;
          }

          .google {
            background-image: url('/src/assets/img/google.png');
            transition: all .3s ease-in-out;

            &:hover {
              @include box-shadow-animation($dim-gray);
            }
          }

          .naver {
            background-image: url('/src/assets/img/naver.png');
            background-size: 80px 80px;

            transition: all .3s ease-in-out;

            &:hover {
              @include box-shadow-animation(#17b377);
            }
          }
        }
      }
    }
  }
}
</style>