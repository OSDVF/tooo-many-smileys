<template>
  <div class="abstract-wrapper">
    <PostListItem
      v-for="(item) in currentPageData"
      :key="item.path"
      :item="item"
      :currentPage="currentPage"
      :currentTag="currentTag" />
  </div>
</template>

<script>
import PostListItem from './PostListItem'

export default {
  components: { PostListItem },
  props: ['data', 'currentPage', 'currentTag'],
  computed: {
    currentPageData () {
      const start = (this.currentPage - 1) * this.$perPage
      const end = this.currentPage * this.$perPage
      var targetSlice = this.data.slice(start, end)
      if(process.env.NODE_ENV === 'development')//Dev mode
        return targetSlice;
      return targetSlice.filter(i => new Date() >= Date.parse(i.frontmatter.date)) // Skip future posts
    }
  }
}
</script>

<style lang="stylus" scoped>
.abstract-wrapper
  width 100%
</style>
