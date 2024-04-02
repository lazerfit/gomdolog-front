<script setup lang=ts>
import { RouterLink } from 'vue-router';
</script>
<template>
  <div class="container">
    <div>
      <h1>
        Recent Posts
      </h1>
    </div>
    <div class="post-wrapper">
      <div class="main-post">
        <RouterLink class="main-post-img" to="/post/1">
          <img src="@/assets/img/pineapples.jpg" alt="mockup">
        </RouterLink>
        <div class="content-wrapper">
          <div class="main-post-category">
            Vue.js
          </div>
          <RouterLink to="/post/1">
            <div class="main-post-title">
              Option API vs Composition API
            </div>
            <div class="main-post-text">
              대법원장과 대법관이 아닌 법관은 대법관회의의 동의를 얻어 대법원장이 임명한다. 국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이
              정하는
              바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.

              모든 국민은 신체의 자유를 가진다. 누구든지 법률에 의하지 아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며, 법률과 적법한 절차에 의하지 아니하고는 처벌·보안처분 또는 강제노역을
              받지
              아니한다.
            </div>
          </RouterLink>
          <div class="main-post-day">
            2024년 3월 25일
          </div>
        </div>
      </div>
      <div class="sub-post-wrapper">
        <div class="sub-post">
          <RouterLink class="sub-post-img" to="/post/2">
            <img src="@/assets/img/pineapples.jpg" alt="mockup">
          </RouterLink>
          <div class="content-wrapper">
            <div class="sub-post-category">
              Vue.js
            </div>
            <RouterLink to="/post/2">
              <div class="sub-post-title">
                Option API vs Composition APIiiiiiiiiiiiiiiiii
              </div>
              <div class="sub-post-text">
                대법원장과 대법관이 아닌 법관은 대법관회의의 동의를 얻어 대법원장이 임명한다. 국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이
                정하는
                바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.

                모든 국민은 신체의 자유를 가진다. 누구든지 법률에 의하지 아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며, 법률과 적법한 절차에 의하지 아니하고는 처벌·보안처분 또는
                강제노역을
                받지
                아니한다.
              </div>
            </RouterLink>
            <div class="sub-post-day">
              2024년 3월 25일
            </div>
          </div>
        </div>
        <div class="sub-post">
          <RouterLink class="sub-post-img" to="/post/1">
            <img src="../assets/img/pineapples.jpg" alt="mockup">
          </RouterLink>
          <div class="content-wrapper">
            <div class="sub-post-category">
              Vue.js
            </div>
            <div class="sub-post-title">
              Option API vs Composition API111111111111111
            </div>
            <div class="sub-post-text">
              대법원장과 대법관이 아닌 법관은 대법관회의의 동의를 얻어 대법원장이 임명한다. 국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이
              정하는
              바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.

              모든 국민은 신체의 자유를 가진다. 누구든지 법률에 의하지 아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며, 법률과 적법한 절차에 의하지 아니하고는 처벌·보안처분 또는 강제노역을
              받지
              아니한다.
            </div>
            <div class="sub-post-day">
              2024년 3월 25일
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.container {
  color: $black-forest;
  width: $desktop-width;
  height: 650px;
  margin: px-to-rem(100) auto;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-family: $secondary-font-en;
    font-size: px-to-rem(40);
  }

  .post-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    height: px-to-rem(600);
    margin-top: px-to-rem(60);
    justify-content: space-between;

    .main-post {
      width: px-to-rem(570);

      .main-post-img {
        width: 100%;
        height: px-to-rem(265);
        display: block;

        img {
          width: inherit;
          height: inherit;
          object-fit: cover;
          border-radius: px-to-rem(15);
          cursor: pointer;
        }
      }

      .content-wrapper {
        margin: px-to-rem(20) px-to-rem(10);


        .main-post-category {
          @include post-category;
        }

        .main-post-title {
          font-weight: 600;
          font-size: px-to-rem(30);
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          margin-top: px-to-rem(5);
          cursor: pointer;
          color: $black-forest;
          font-family: $secondary-font;

          &:hover {
            text-shadow: 1.5px 1.5px $light-black;
          }
        }

        .main-post-text {
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 9;
          -webkit-box-orient: vertical;
          line-height: px-to-rem(20);
          height: px-to-rem(180);
          margin-top: px-to-rem(14);
          color: $dim-black;
          cursor: pointer;

        }

        .main-post-day {
          margin-top: px-to-rem(30);
          font-size: px-to-rem(13);
          color: $light-black;
        }
      }
    }

    .sub-post-wrapper {
      width: px-to-rem(570);
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .sub-post {
        width: 100%;
        height: px-to-rem(270);
        display: flex;

        .sub-post-img {
          img {
            width: px-to-rem(260);
            height: 100%;
            object-fit: cover;
            border-radius: px-to-rem(10);
            cursor: pointer;
          }
        }

        .content-wrapper {
          margin-left: px-to-rem(10);
          width: px-to-rem(295);

          .sub-post-category {
            @include post-category
          }

          .sub-post-title {
            @include sub-post-title;
            display: block;
          }

          .sub-post-text {
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 8;
            -webkit-box-orient: vertical;
            line-height: px-to-rem(20);
            height: px-to-rem(160);
            margin-top: px-to-rem(14);
            color: #555;
            cursor: pointer;
          }

          .sub-post-day {
            margin-top: px-to-rem(15);
            font-size: px-to-rem(13);
            color: #999;
          }
        }
      }
    }
  }
}
</style>