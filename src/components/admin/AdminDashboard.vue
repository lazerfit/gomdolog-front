<script setup lang=ts>
import AdminAside from './AdminAside.vue';
import AdminCategory from './AdminCategory.vue';
</script>
<template>
  <div class="container">
    <admin-aside />
    <div class="main-content-container">
      <div class="content-wrapper">
        <div class="popular-post">
          <h1>Popular Posts</h1>
          <div class="posts">
            <div class="post">
              <div class="post-title">
                CSS와 SCSS의 차이점에 대하여
              </div>
              <div class="views">
                30views
              </div>
            </div>
            <div class="post">
              <div class="post-title">
                CSS와 SCSS의 차이점에 대하여1111111111111111111111
              </div>
              <div class="views">
                30views
              </div>
            </div>
            <div class="post">
              <div class="post-title">
                CSS와 SCSS의 차이점에 대하여
              </div>
              <div class="views">
                30views
              </div>
            </div>
            <div class="post">
              <div class="post-title">
                CSS와 SCSS의 차이점에 대하여
              </div>
              <div class="views">
                30views
              </div>
            </div>
            <div class="post">
              <div class="post-title">
                CSS와 SCSS의 차이점에 대하여
              </div>
              <div class="views">
                30views
              </div>
            </div>
          </div>
        </div>
        <div class="user-container">
          <h1>Users</h1>
          <div class="users">
            <div class="user">
              <div class="name">
                redkafe98@gmail.com
              </div>
              <div class="role">
                <select name="role" id="user-role">
                  <option value="ADMIN">ADMIN</option>
                  <option value="USER">USER</option>
                </select>
              </div>
            </div>
            <div class="user">
              <div class="name">
                redkafe12@gmail.com
              </div>
              <div class="role">
                <select name="role" id="user-role">
                  <option value="ADMIN">ADMIN</option>
                  <option value="USER">USER</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <admin-category />
        <div class="recyclebin-container">
          <h1>Recycle Bin</h1>
          <div class="posts">
            <div class="post">
              <div class="title">
                Option API 란 무엇인가?
              </div>
              <div class="date">
                2024년 3월 29일
              </div>
              <div class="btns">
                <i class="fa-solid fa-rotate"></i>
                <i class="fa-solid fa-trash"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.container {
  width: $desktop-width;
  display: flex;
  margin: px-to-rem(40) auto;
  font-family: $secondary-font;

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (min-width:768px) and (max-width: 1024px) {
    width: 100%;
  }

  h1 {
    font-size: 1.5rem;
    font-family: $secondary-font-en;
  }

  .main-content-container {
    width: 84%;
    margin-left: auto;
    border: 1px solid #000;
    margin: px-to-rem(30) 0;
    border-radius: px-to-rem(10);
    box-shadow: 5px 5px 5px $light-black;

    @media (max-width: 767px) {
      width: 100%;
      display: flex;
      flex-flow: column wrap;
      margin: 0;
    }

    .content-wrapper {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;

      @media (max-width: 767px) {
        width: 100%;
        display: flex;
        margin: 0;
      }

      .popular-post {
        margin: px-to-rem(20);
        width: 45%;

        @media (max-width: 767px) {
          width: 100%;
        }

        .posts {
          border-radius: px-to-rem(10);
          box-shadow: 3px 3px 10px $light-black;
          margin-top: px-to-rem(15);
          padding: px-to-rem(10);

          .post {
            display: flex;
            margin: px-to-rem(15);

            .post-title {
              width: px-to-rem(350);
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;

              @media (max-width: 767px) {
                width: 220px;
              }
            }

            .views {
              margin-left: px-to-rem(30);
            }
          }
        }
      }

      .user-container {
        margin: px-to-rem(20);
        width: 40%;

        @media (max-width: 767px) {
          width: 100%;
        }

        .users {
          border-radius: px-to-rem(10);
          box-shadow: 3px 3px 10px $light-black;
          margin-top: px-to-rem(15);
          width: px-to-rem(350);
          padding: px-to-rem(10);

          @media (max-width: 767px) {
            width: 100%;
          }

          .user {
            display: flex;
            justify-content: space-between;
            margin: px-to-rem(15);

            .role {
              select {
                font-family: $secondary-font;
                border-radius: px-to-rem(10);
              }
            }
          }
        }
      }



      .recyclebin-container {
        margin: px-to-rem(20);
        width: 40%;

        @media (max-width: 767px) {
          width: 100%;
        }

        .posts {
          border-radius: px-to-rem(10);
          box-shadow: 3px 3px 10px $light-black;
          margin-top: px-to-rem(15);
          padding: px-to-rem(10);

          @media (max-width: 767px) {
            width: 100%;
          }

          .post {
            display: flex;
            gap: px-to-rem(10);
            align-items: center;
            margin: px-to-rem(15);

            .date {
              font-size: 0.8rem;
              color: $light-black;
            }

            .btns {
              margin-left: auto;

              i {
                margin-right: px-to-rem(5);
                cursor: pointer;
                color: $light-black;
                transition: all .3s ease;

                &:hover {
                  color: $black-forest;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>