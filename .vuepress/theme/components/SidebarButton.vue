<template>
  <div class="sidebar-button" @click="$emit('toggle-sidebar')">
    <img src="/emotes/hamburger-menu.svg" class="icon"/>
  </div>
</template>

<style lang="stylus">
.sidebar-button
  cursor pointer
  display none
  width 1.25rem
  height 1.25rem
  position absolute
  padding 0.6rem
  top 0.8rem
  left 1rem
  .icon
    display block
    width 1.25rem
    height 1.25rem
.dark .icon
  filter: invert(1)

@media (max-width: $MQMobile)
  .sidebar-button
    display block
</style>
