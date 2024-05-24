<script setup lang=ts>
import { RouterLink } from 'vue-router';
import { useCategoryResponseStore } from '@/stores/useCategoryStore';
import { computed, onBeforeMount, ref, watchEffect } from 'vue';
import { usePostResponseStore } from '@/stores/usePostResponseStore';
import { useLoginStore } from '@/stores/useLoginStore';
import { useRoute } from 'vue-router';
import { defineAsyncComponent, onBeforeUnmount } from 'vue';

const store = useCategoryResponseStore();
const postStore = usePostResponseStore();
const loginStore = useLoginStore();
const route = useRoute();

const filteredCategory = (computed(() => store.categories.filter(category => category.title !== '없음')))

const isModalOpened = ref(false);
const isBoxChecked = ref(false);

const submitHandler = () => {
  console.log("정상 제출 완료");
}

const BasicModal = defineAsyncComponent(() =>
  import('@/components/common/BasicModal.vue')
);

const BasicToast = defineAsyncComponent(() =>
  import('@/components/common/BasicToast.vue')
);

const openModal = () => {
  isModalOpened.value = true;
  isBoxChecked.value = false;
}

const closeModal = () => {
  isModalOpened.value = false;
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
  store.FETCH_ALL()
})

onBeforeUnmount(() => {
  loginStore.isAdmin = false;
})

watchEffect(() => {
  const categoryTitle = route.params.title;
  if (categoryTitle) {
    isBoxChecked.value = false
    postStore.BY_CATEGORY_SEARCH(categoryTitle);
  }
})

</script>
<template>
  <div class="mobile-menu">
    <div class="wrapper">
      <input type="checkbox" id="trigger" v-model="isBoxChecked">
      <label for="trigger">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <basic-toast />
      <div class="sidebar">
        <div class="category-wrapper">
          <RouterLink :to="{ name: 'category', params: { title: item.title } }" class="category"
            v-for="(item, index) in filteredCategory" :key="index">
            {{ item.title }}
          </RouterLink>
        </div>
        <div class="login-wrapper">
          <div class="login-btn" v-if="!loginStore.isAdmin" @click="openModal">
            로그인
          </div>
          <div class="admin-menu-wrapper" v-else>
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
        </div>
      </div>
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
                  <input type="password" placeholder="비밀번호" required v-model="loginStore.signInForm.password">
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

.darkMode {
  label[for=trigger] {
    span {
      background-color: $pearl !important;
    }
  }

  .mobile-menu {
    border: 2px solid $pearl !important;
  }

  .sidebar {
    background-color: #121212 !important;

    .category {
      background-color: $pearl !important;
      color: $black-forest !important;
    }
  }
}

.mobile-menu {
  @media screen and (min-width: 1024px) {
    display: none;
  }

  @media (min-width:768px) and (max-width: 1023px) {
    display: none;
  }

  border: 2px solid $black-forest;
  border-radius: 7px;
  width: 30px;
  height: 30px;

  .wrapper {
    height: 20px;
    width: 20px;
    position: relative;

    input[id=trigger] {
      @media screen and (max-width: 767px) {
        display: none;

        &:checked+label[for=trigger] span:nth-child(1) {
          top: px-to-rem(12);
          transform: rotate(45deg);
        }

        &:checked+label[for=trigger] span:nth-child(2) {
          opacity: 0;
        }

        &:checked+label[for=trigger] span:nth-child(3) {
          top: px-to-rem(12);
          transform: rotate(-45deg);
        }

        &:checked~.sidebar {
          right: 0;
        }
      }
    }

    label[for=trigger] {
      @media screen and (max-width: 767px) {
        display: block;
        margin-right: 5px;
        cursor: pointer;

        span {
          position: absolute;
          height: 2px;
          width: 100%;
          left: 17%;
          background-color: $black-forest;
          transition: all .3s ease;


          &:nth-child(1) {
            top: px-to-rem(5);
          }

          &:nth-child(2) {
            top: px-to-rem(12);
          }

          &:nth-child(3) {
            top: px-to-rem(19);
          }
        }
      }
    }

    .sidebar {
      @media screen and (max-width: 767px) {
        width: 80%;
        height: 100%;
        position: fixed;
        background-color: $background-color;
        right: -767px;
        top: 50px;
        transition: .3s ease;
        z-index: 1000;
        overflow: hidden;

        .category-wrapper {
          position: absolute;
          top: 80px;
          left: 50%;
          translate: -50% 0;

          .category {
            display: block;
            text-align: center;
            padding: 5px;
            margin: 10px 0;
            font-family: $secondary-font;
            width: 100px;
            border-radius: 0.7rem;
            box-shadow: 5px 5px 20px rgba($color: #333, $alpha: .17);
            overflow: hidden;

            &:nth-child(1) {
              background-color: #FFDA79;
              border: none;
              color: #FF793F;
              @include box-shadow-animation(#ccae62);
            }

            &:nth-child(2) {
              background-color: #34ace075;
              border: none;
              color: #227093;
              @include box-shadow-animation(#226f938c);
            }

            &:nth-child(3) {
              background-color: #716fd369;
              border: none;
              color: #706FD3;
              @include box-shadow-animation(#47478788);
            }

            &:nth-child(4) {
              background-color: #33d9b26e;
              border: none;
              color: #218C74;
              @include box-shadow-animation(#218c758a);
            }

            &:nth-child(5) {
              background-color: #ff525277;
              border: none;
              color: #B33939;
              @include box-shadow-animation(#b339398e);
            }
          }
        }
      }
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

    .login-wrapper {
      position: absolute;
      bottom: 80px;
      left: 50%;
      translate: -50% 0;
      width: 100%;

      .login-btn {
        display: block;
        text-align: center;
        padding: 5px;
        margin: 10px auto;
        font-family: $secondary-font;
        width: 100px;
        border-radius: 0.7rem;
        background-color: $black-forest;
        color: $pearl;
        @include box-shadow-animation($light-black);
        overflow: hidden;
      }

      .admin-menu-wrapper {
        display: flex;
        justify-content: space-between;

        div {
          display: block;
          text-align: center;
          padding: 5px;
          margin: 10px 5px;
          font-family: $secondary-font;
          width: 100px;
          border-radius: 0.7rem;
          background-color: $black-forest;
          color: $pearl;
          @include box-shadow-animation($light-black);
          overflow: hidden;

          a {
            color: $pearl;
          }
        }
      }
    }
  }
}
</style>