<template>
  <el-container ref="memberLayout" :class="$style['member-layout']">
    <el-header :class="[$style['header-section'], isActive]">
      <sa-header :is-collapse="isCollapse" @change-collapse="changeCollapse" />
    </el-header>
    <el-container>
      <el-aside :is-collapse="isCollapse" :class="[$style['left-section'], isActive]">
        <sa-side-bar :is-collapse="isCollapse" />
      </el-aside>
      <el-main :class="[$style['main-section'], isActive]">
        <div v-if="route.name !== 'Download'" :class="$style['main-section__top-bar']">
          <sa-top-bar />
        </div>
        <div :class="$style['main-section__content']">
          <router-view />
        </div>
      </el-main>
    </el-container>
    <el-footer>
      <sa-footer />
    </el-footer>
  </el-container>
</template>
<script setup lang="ts">
import { ref, computed, useCssModule, onMounted } from 'vue'
import SAHeader from '@/components/SAHeader.vue';
import SAFooter from '@/components/SAFooter.vue'
import SASideBar from '@/components/SASideBar.vue'
import SATopBar from '@/components/SATopBar.vue';
import { useRoute } from 'vue-router'

const memberLayout = ref()
const route = useRoute()
const isCollapse = ref(false)
const style = useCssModule()
const isActive = computed(() => {
  return isCollapse.value ? '' : style.active
})
onMounted(() => {
  if (memberLayout.value?.$el?.clientWidth <= 766) {
    isCollapse.value = true
  }
})
const changeCollapse = () => {
  isCollapse.value = !isCollapse.value
}

</script>
<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'MemberLayout',
  });
</script>
<style lang="stylus" module>
.member-layout
  .header-section
    width calc(100% - 193px)
    right 0
    top 0
    position fixed
    background $white
    width 100%
    z-index 100
    padding 0 $space * 10 0 $space * 5
  .left-section
    z-index 99
    position fixed
    text-align left
    min-height 100vh
    width 0 !important
    transition width 0.5s
    padding-top $space * 15
    top 0
    bottom 0
    overflow-y scroll
    overflow-x hidden
    &::-webkit-scrollbar
      width 1px
  .left-section.active
    width 220px !important
  .main-section
    margin-top $space * 15
    min-height calc(100vh - 108px)
    display flex
    flex-direction column
    background-color #f2f5fa
    &__content
      flex 1
      display flex
      flex-direction column
    &__top-bar
      background-color $white
      margin-bottom $space * 7.5
  @media (min-width: 766px)
    .left-section
      width 6% !important
    .main-section
      margin-left $space * 16
      transition all 0.5s ease
      height 100%
    .main-section.active
      margin-left 220px
</style>
