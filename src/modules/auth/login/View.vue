<template>
  <div class="login">
    <div class="login__container">
      <div class="login__img">
        <img src="@/assets/images/logo-small.png" alt="logo-go2joy.png" />
      </div>
      <el-form @submit.prevent="submitForm">
        <el-form-item>
          <el-input
            v-model="formData.userId"
            placeholder="User ID"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="formData.password"
            placeholder="Password"
            :type="typePasswordInput"
            @keyup.enter="submitForm"
          >
            <template #suffix>
              <el-icon
                style="cursor: pointer; height: 100%"
                :class="iconPasswordInput"
                @click="showPwd"
              >
                <View />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <div class="login__remember">
            <el-checkbox v-model="formData.remember" />
            <span>Remember this account</span>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login__submit"
            :loading="loading"
            @click.prevent="submitForm"
          >
            Sign In
          </el-button>
        </el-form-item>
        <el-form-item>
          <div class="login__forgot-password" @click="toForgotPassword">Forgot Password?</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts">
// component and library
import { reactive, ref, inject } from 'vue';
import { login, IUserInformation } from './api';
import { useRouter } from 'vue-router';
import { Emitter } from 'mitt';
import type { FormInstance, FormRules } from 'element-plus';
import { View } from '@element-plus/icons-vue';
import md5 from 'md5'

// var
const router = useRouter();
// data
const loading = ref(false);
const typePasswordInput = ref('password');
const iconPasswordInput = ref('el-icon-not-view');
const formData = reactive({
  userId: '',
  password: '',
  remember: false,
});
// inject
const emitter = inject('emitter') as Emitter<any>;
// methods
const showPwd = () => {
  typePasswordInput.value = typePasswordInput.value === 'password' ? '' : 'password';
  iconPasswordInput.value = typePasswordInput.value === 'password' ? 'el-icon-not-view' : 'el-icon-view';
};
const toForgotPassword = () => {
  router.push({ name: 'ForgotPassword' });
};
const setLocalStorageWithExpiry = (key: string, value: any, ttl: number): void => {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};
const submitForm = async () => {
  loading.value = true;
  const params = {
    userId: formData.userId,
    password: md5(formData.password),
    remember: Number(formData.remember),
  };
  try {
    const data: IUserInformation = await login(params);
    const ttl = formData.remember ? 60 * 60 * 24 * 90 * 1000 : 60 * 60 * 24 * 1000;
    setLocalStorageWithExpiry('access_token', data.accessToken, ttl);
    setLocalStorageWithExpiry('profile', data.profile, ttl);
    setLocalStorageWithExpiry('permissionList', data.permissionList, ttl);
    emitter.emit('login');
  } catch (error) {
    return false;
  } finally {
    loading.value = false;
  }
};
</script>
<style lang="stylus" scoped>
.el-icon-not-view
  position relative
  &:after
    content ''
    height 14px
    width 1px
    background-color #c0c4cc
    position absolute
    top 12px
    right 0
    transform rotate(-30deg)
    margin-left auto
    margin-right auto
    left 0
    right 0
.login
  display flex
  align-items center
  justify-content center
  background-color $background
  min-height 100vh
  &__img
    text-align center
    margin-bottom $space * 4
    img
      height 95px
      width 95px
  &__remember
    display flex
    align-items center
    span
      margin-left $space * 1.5
      color $grey-dark
  &__container
    padding $space * 6
    width 525px
    border-radius $space * 2
    background-color $white
  &__submit
    background-color $primary
    height 48px
    width 100%
    border none
    border-radius 4px
    display flex
    align-items center
    justify-content center
    color $white
    cursor pointer
    transition all .2s
    &:hover
      opacity 0.8
  &__forgot-password
    text-align center
    cursor pointer
    transition all .2s
    &:hover
      color $primary
</style>
