<template>
  <div :class="$style['sa-footer']">© {{ new Date().getFullYear() }} Go2Joy - All Rights Reserved.</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SAFooter',
});
</script>
<style lang="stylus" module>
.sa-footer
  background-color $white
  display flex
  align-items center
  justify-content center
  height 48px
</style>
