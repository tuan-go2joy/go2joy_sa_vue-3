<template>
  <div v-if="$route.name && $route.name !== 'Download'" :class="$style['sa-top-bar']">
    <h3 :class="$style['sa-top-bar__title']">
      <!-- {{ t($route.matched[0].name) }} -->
    </h3>
    <div :class="$style['sa-top-bar__path']">
      <component
        :is="router.name === 'collection' && $route.matched.length > 1 ? 'router-link' : 'span'"
        v-for="router in $route.matched"
        :key="router.name"
        :to="router.path"
        :class="{
          'sa-top-bar__path--back': router.name === 'collection' && $route.matched.length > 1,
        }"
      >
        <!-- {{ t(router.name) }} -->
      </component>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'SATopBar',
  setup() {
    // data
    const { t, locale } = useI18n();
    return {
      t,
      locale,
    };
  },
});
</script>
<style lang="stylus" module>
.sa-top-bar
  padding 20px
  &__title
    font-size 18px
    margin-bottom 5px
    margin-top 0
    font-weight 600
  &__path
    display flex
    align-items center
    margin-left 26px
    font-size 14px
    margin-top $space * 2
    color $grey-dark
    &--back
      color #8A98AC
      font-weight 600

  i
    margin 0 8px
    font-size 12px
</style>
