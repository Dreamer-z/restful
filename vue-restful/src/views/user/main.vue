<template>
  <div class="user">{{ userData }}</div>
</template>

<script type="ts" setup>
import { ref } from "vue";
import { userInfo } from "@/stores/user/index.ts";
const userData = ref('');
const UserInfo = userInfo();
function getUserInfo() {
    UserInfo.getUserInfo().then((res) => {
    console.log(res)
    userData.value = res.data;
  });
}
getUserInfo();
</script>

<style scoped></style>
