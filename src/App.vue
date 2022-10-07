<template>
  <div :class="$style['app']">
    <component :is="layout" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, inject } from 'vue';
import { Emitter } from 'mitt';

const layout = ref('member-layout');
const emitter = inject('emitter') as Emitter<any>;
// mounted
onMounted(() => {
  setLayout()
  emitter.on('login', async () => {
    layout.value = 'member-layout';
  });
  emitter.on('logout', async () => {
    layout.value = 'guest-layout';
  });
})
// method
const setLayout = () => {
  const token = localStorage.getItem('access_token');
  if (token) {
    layout.value = 'member-layout';
  } else {
    layout.value = 'guest-layout';
  }
};
</script>
<style lang="stylus" module>
.app
  min-height 100vh
  font-size 16px
</style>
