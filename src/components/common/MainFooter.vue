<script setup lang=ts>

</script>
<template>
  <div class="container">
    <div class="sns">
      <span>
        <a target="_blank" href="https://github.com/lazerfit">
          <i class="fa-brands fa-github"></i>
        </a>
      </span>
      <span>
        <a target="_blank" href="https://www.linkedin.com/in/ddoddi14/">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </span>
    </div>
    <div class="copywrite">
      @Designed By gomdolog.
    </div>
  </div>
</template>

<style lang='scss' scoped>
.container {
  width: $desktop-width;
  height: px-to-rem(120);
  border-top: 1px solid $ghost;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: #555;

  .sns {
    span {
      a {
        margin-right: px-to-rem(5);
        font-size: px-to-rem(20);
        color: #555;
      }
    }
  }

  .copywrite {
    margin-top: px-to-rem(5);
  }
}
</style>