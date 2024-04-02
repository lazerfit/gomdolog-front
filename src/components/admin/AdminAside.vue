<script setup lang=ts>

</script>
<template>
  <aside>
    <div class="content-wrapper">
      <div class="dashboard">
        <span>
          <i class="fa-solid fa-clapperboard"></i>
        </span>
        <span class="title">
          Dashboard
        </span>
      </div>
      <div class="category">
        <span>
          <i class="fa-solid fa-table-list"></i>
        </span>
        <span class="title">
          Category
        </span>
      </div>
      <div class="category">
        <span>
          <i class="fa-regular fa-trash-can"></i>
        </span>
        <span class="title">
          Recycle Bin
        </span>
      </div>
    </div>
  </aside>
</template>

<style lang='scss' scoped>
aside {
  border: 1px solid #000;
  width: px-to-rem(140);
  height: px-to-rem(1050);
  margin: px-to-rem(30) px-to-rem(30) px-to-rem(30) 0;
  border: 1px solid #000;
  border-radius: px-to-rem(10);
  box-shadow: 5px 5px 5px $light-black;

  .content-wrapper {
    margin: px-to-rem(20);
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: px-to-rem(15);
    transition: all .3s ease;

    span {
      font-family: $secondary-font;
      cursor: pointer;
    }

    .title {
      font-weight: 500;

      &:hover {
        text-shadow: 1px 1px 2px $light-black;
      }
    }
  }
}
</style>