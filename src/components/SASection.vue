<template>
  <div :class="$style['sa-section']">
    <header>
      <div v-if="title || description" :class="$style['sa-section__header']">
        <h1 v-if="title" :class="$style['sa-section__title']" v-text="title" />
        <p v-if="description" :class="$style['sa-section__description']" v-text="description" />
      </div>
      <div :class="$style['sa-section__header']">
        <slot name="header" />
      </div>
      <div :class="$style['sa-section__header-right']">
        <slot name="header-right" />
      </div>
    </header>
    <div :class="$style['sa-section__body']">
      <slot />
    </div>
    <footer :class="$style['sa-section__footer']">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SASection',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
});
</script>
<style lang="stylus" module>
.sa-section
  padding $space * 8
  background-color $white
  &__header-right
    margin-bottom $space * 5
    display flex
    justify-content end
    align-items center
  &__header
    margin-bottom $space * 5
    display flex
    justify-content space-between
    align-items flex-start
  &__footer
    margin-top $space * 8
  &__title
    font-size 16px
    font-weight 600
    margin-bottom $space * 2
  &:not(:last-child)
    margin-bottom $space * 6
</style>
