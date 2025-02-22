<template>
  <div class="login">
    <div class="form-item">
      <span>email:</span>
      <input v-model="email" type="text" />
    </div>
    <div class="form-item">
      <span>password:</span>
      <input v-model="password" type="password" />
    </div>
    <div class="form-item">
      <button @click="submit">提交</button>
    </div>
  </div>
</template>

<script type="ts" setup>
import { ref} from "vue";
import { useRouter } from "vue-router";
import { useXCsrfToken } from "@/stores/login/index.ts";
const email = ref('');
const password = ref('');
const xCsrfToken = useXCsrfToken();
const router = useRouter();
function getToken() {
  xCsrfToken.setToken();
}
getToken();
function submit() {
  xCsrfToken.login().then((res) => {
    console.log(res)
  }).finally(() => {
    router.push({path: '/user'});
  });
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 400px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #eee;
  border-radius: 6px;
}
.form-item {
  display: flex;
  align-items: center;
}
.form-item + .form-item {
  margin-top: 16px;
}
</style>
