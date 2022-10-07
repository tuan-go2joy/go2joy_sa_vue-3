
<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { menus } from '@/utils/const'
import { useAuth } from '@/composable/useAuth';
// data
const isCollapse = ref(true)
const { locale, t } = useI18n();
const route = useRoute();
const { hasPermission } = useAuth();

// methods
const setActive = (actives: any) => {
  if (actives && actives.length === 0) {
    return false;
  }
  const result = actives.find((item: any) => {
    return item === route.name;
  });
  return !!result;
};
</script>
<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'SASideBar',
  });
</script>
<template>
  <el-menu
    fixed
    :class="$style['sa-sidebar']"
    :collapse="isCollapse"
    :default-active="$route.path"
  >
    <div v-for="menu in menus" :key="menu.title">
      <el-menu-item
        v-if="hasPermission(menu.permission)"
        :index="menu.path"
        :class="[
          { [$style['is-active']]: setActive(menu.actives) },
          $style['sa-sidebar__item'],
        ]"
        @click="$router.push({ name: menu.title })"
      >
        <el-icon> <component :is="menu.icon" /> </el-icon>
        <template #title>
          <span>{{ t(`${menu.title}`, {}, { locale: locale }) }}</span>
        </template>
      </el-menu-item>
    </div>
  </el-menu>
</template>
<style lang="stylus" module>
.sa-sidebar
  @media (max-width 700px)
    height: 100%
  border-right none
  &__item.is-active
    color $primary
  :global
    .el-menu-item.is-active
      color $primary
    .el-menu-item
      &:hover
        color $primary
.el-image
  height 100%
  width 170px
  padding-top 10px
  padding-left 10px
</style>