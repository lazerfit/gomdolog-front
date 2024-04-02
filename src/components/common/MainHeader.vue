<script setup lang=ts>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import BasicModal from './BasicModal.vue';

const isModalOpened = ref(false);

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
    <div class="sub-logo-container">
      <div class="search-bar">
        <form action="#none">
          <input type="search" name="search" pattern=".*\S.*" required placeholder="search...">
        </form>
      </div>
      <span class="login">
        <!-- <i class="fa-solid fa-user" @click="openModal"></i> -->
        <i class="fa-solid fa-user"></i>
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

  .main-logo {
    img {
      width: px-to-rem(250);
    }
  }

  .sub-logo-container {
    margin-left: auto;
    display: flex;

    .search-bar {

      form {
        margin-right: 10px;

        input {
          max-width: px-to-rem(150);
          border: none;
          border-bottom: 1px solid $dim-black;
          height: px-to-rem(23);
          transition: all .3s ease-in-out;
          font-family: $secondary-font;
          padding-left: px-to-rem(2);

          &:focus::placeholder {
            opacity: 0;
          }

          &::placeholder {
            font-family: $secondary-font-en;
            font-size: 1.3rem;
            font-weight: 600;
            transition: all .3s ease-in-out;
          }
        }
      }
    }

    .login {
      margin-right: px-to-rem(5);


      .fa-user {
        font-size: px-to-rem(23);
        cursor: pointer;
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