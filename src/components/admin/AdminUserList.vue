<script setup lang=ts>
import { useAdminStore } from '@/stores/useAdminStore';

const adminStore = useAdminStore();
</script>
<template>
  <div class="users" v-if="adminStore.isUserShow">
    <h1>Users</h1>
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
</template>

<style lang='scss' scoped>
.darkMode {
  .users {
    box-shadow: 1px 1px 5px $dim-black !important;
  }
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
</style>