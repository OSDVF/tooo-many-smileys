<template>
  <main class="page" :style="pageStyle" ref="mainElement">
    <ModuleTransition>
      <div class="page-title">
        <h1 class="title">{{$page.title}}</h1>
        <PageInfo :pageInfo="$page" :showAccessNumber="showAccessNumber"></PageInfo>
      </div>
    </ModuleTransition>

    <ModuleTransition delay="0.08">
      <SubSidebar v-if="recoShowModule" class="side-bar" />
    </ModuleTransition>

    <ModuleTransition delay="0.08">
      <Content class="theme-reco-content" />
    </ModuleTransition>

    <ModuleTransition delay="0.16">
      <footer v-if="recoShowModule" class="page-edit">
        <div
          class="edit-link"
          v-if="editLink"
        >
          <a
            :title="editLinkTitle"
            :href="editLink"
            target="_blank"
            rel="noopener noreferrer"
          >{{ editLinkText }}</a>
          <OutboundLink/>
        </div>

        <div
          class="last-updated"
          v-if="lastUpdated"
        >
          <span class="prefix">{{ lastUpdatedText }}: </span>
          <span class="time">{{ lastUpdated }}</span>
        </div>
      </footer>
    </ModuleTransition>

    <ModuleTransition delay="0.24">
      <div class="page-nav" v-if="recoShowModule && (prev || next)">
        <p class="inner">
          <span
            v-if="prev"
            class="prev"
          >
            ←
            <router-link
              v-if="prev"
              class="prev"
              :to="prev.path"
            >
              {{ prev.title || prev.path }}
            </router-link>
          </span>

          <span
            v-if="next"
            class="next"
          >
            <router-link
              v-if="next"
              :to="next.path"
            >
              {{ next.title || next.path }}
            </router-link>
            →
          </span>
        </p>
      </div>
    </ModuleTransition>
    <div class="page-edit"><small>Všechny komentáře jsou veřeně viditelné 👀. Pokud chcete něco říct v soukromí, <router-link to="/docs/contact.html">můžete tady.</router-link></small></div>
    <ModuleTransition delay="0.32">
      <Comments v-if="recoShowModule" :isShowComments="shouldShowComments"/>
    </ModuleTransition>
  </main>
</template>

<script>
import PageInfo from '@theme/components/PageInfo'
import { resolvePage, outboundRE, endingSlashRE } from '@theme/helpers/utils'
import { ModuleTransition } from '@vuepress-reco/core/lib/components'
import SubSidebar from '@theme/components/SubSidebar'

import tippy from 'tippy.js';

export default {
  components: { PageInfo, ModuleTransition, SubSidebar },

  props: ['sidebarItems'],

  data () {
    return {
      isHasKey: true
    }
  },
  updated()
  {
    tippy('.page [title]:not(.no-tooltip),.page [alt]', {
      content(reference) {
        const title = reference.getAttribute('title') || reference.getAttribute('alt');
        reference.removeAttribute('title')
        reference.removeAttribute('alt')
        return title;
      },
      appendTo: this.$refs.mainElement
    });
  },
  computed: {
    recoShowModule () {
      return this.$parent.recoShowModule
    },
    // 是否显示评论
    shouldShowComments () {
      const { isShowComments } = this.$frontmatter
      const { showComment } = this.$themeConfig.valineConfig || { showComment: true }
      return (showComment !== false && isShowComments !== false) || (showComment === false && isShowComments === true)
    },
    showAccessNumber () {
      const {
        $themeConfig: { valineConfig },
        $themeLocaleConfig: { valineConfig: valineLocalConfig }
      } = this

      const vc = valineLocalConfig || valineConfig
      if (vc && vc.visitor != false) {
        return true
      }
      return false
    },
    lastUpdated () {
      return new Date(this.$page.lastUpdated).toLocaleString()
    },
    lastUpdatedText () {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }
      if (typeof this.$themeConfig.lastUpdated === 'string') {
        return this.$themeConfig.lastUpdated
      }
      return 'Last Updated'
    },
    prev () {
      const prev = this.$frontmatter.prev
      if (prev === false) {
        return
      } else if (prev) {
        return resolvePage(this.$site.pages, prev, this.$route.path)
      } else {
        return resolvePrev(this.$page, this.sidebarItems)
      }
    },
    next () {
      const next = this.$frontmatter.next
      if (next === false) {
        return
      } else if (next) {
        return resolvePage(this.$site.pages, next, this.$route.path)
      } else {
        return resolveNext(this.$page, this.sidebarItems)
      }
    },
    editLink () {
      if (this.$frontmatter.editLink === false) {
        return false
      }
      const {
        repo,
        editLinks,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo
      } = this.$themeConfig

      if (docsRepo && editLinks && this.$page.relativePath) {
        return this.createEditLink(repo, docsRepo, docsDir, docsBranch, this.$page.relativePath)
      }
      return ''
    },
    editLinkText () {
      return (
        this.$themeLocaleConfig.editLinkText || this.$themeConfig.editLinkText || `Edit this page`
      )
    },
    editLinkTitle () {
      return (
        this.$themeLocaleConfig.editLinkTitle || this.$themeConfig.editLinkTitle || `Edit on GitHub`
      )
    },
    pageStyle () {
      return this.$showSubSideBar ? {} : { paddingRight: '0' }
    }
  },

  methods: {
    createEditLink (repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo)
          ? docsRepo
          : repo
        return (
          base.replace(endingSlashRE, '') +
           `/src` +
           `/${docsBranch}/` +
           (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '') +
           path +
           `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        )
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`
      return (
        base.replace(endingSlashRE, '') +
        `/tree` +
        `/${docsBranch}/` +
        (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '') +
        path
      )
    }
  }
}

function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

function find (page, items, offset) {
  const res = []
  flatten(items, res)
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset]
    }
  }
}

function flatten (items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === 'group') {
      flatten(items[i].children || [], res)
    } else {
      res.push(items[i])
    }
  }
}

</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  position relative
  padding-top 5rem
  padding-bottom 2rem
  padding-right 14rem
  display block
  font-size: 1.07rem
  p
    line-height 2
  blockquote
    box-sizing border-box
    font-size: 1.2rem
    font-weight: 500
    letter-spacing: 0.02em
    line-height: 1.4
    border-left: 0.3125rem solid #0083d4
    background linear-gradient(to right, var(--code-color), #dddddd00)
    margin: .25rem 0 1rem
    padding: 2rem 1.4rem 1.4rem
    position relative
    & > footer
    & > p > em > strong
      font-style normal
      font-size: 0.8rem;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 1.5;
      display: block;
      &:not(:first-child)
        margin-top: 0.7rem;
      &::before
        content: "— "
    &::before
      color #a7a7a777
      content "“"
      font-size 4rem
      font-family sans
      position absolute
      top -1.1rem
      left .7rem
    & > p
      line-height 1.4
      margin 0
    &>:last-child::after
      color #a7a7a777
      content "„"
      font-size 4rem
      font-family sans
      position absolute
      bottom -.4rem
      margin-left: .2rem
  .side-bar
    position fixed
    top 10rem
    bottom 10rem
    right 2rem
    overflow-y scroll
    &::-webkit-scrollbar
      width: 0
      height: 0
  .page-title
    max-width: $contentWidth;
    margin: 0 auto;
    padding: 1rem 2.5rem;
    color var(--text-color)
  .page-edit
    @extend $wrapper
    padding-top 1rem
    padding-bottom 1rem
    overflow auto visible
    .edit-link
      display inline-block
      a
        color $accentColor
        margin-right 0.25rem
    .last-updated
      float right
      font-size 0.9em
      .prefix
        font-weight 500
        color $accentColor
      .time
        font-weight 400
        color #aaa
  .comments-wrapper
    @extend $wrapper
  img
    &[src^="/images"], &.round
      display block
      margin 0 auto
      margin-top 1rem
      border-radius: 4px
      box-shadow: 1px 1px 2px #00000050, 0 0 25px #00000020
    .middle
      vertical-align middle
  a.download
    display inline-block
    clear both
    padding .5rem .7rem
    border 2px solid gray
    border-radius 4px
    color var(--text-color)
    &::before
      content "📂⬇️"
      margin-right .5rem
    &:hover
      text-decoration none !important
      background #cccccc55

.page-nav
  @extend $wrapper
  padding-top 1rem
  padding-bottom 0
  .inner
    min-height 2rem
    margin-top 0
    border-top 1px solid var(--border-color)
    padding-top 1rem
    overflow auto // clear float
  .next
    float right

@media (max-width: $MQMobile)
  .page
    padding-right 0
    .side-bar
      position static
      margin 1rem 0 0 2rem
    .page-title
      padding: 0 1.9rem;
    .page-edit
      .edit-link
        margin-bottom .5rem
      .last-updated
        font-size .8em
        float none
        text-align left

</style>
