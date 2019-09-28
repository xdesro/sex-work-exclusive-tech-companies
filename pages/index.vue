<template>
  <div>
    <h1 class="main-title" v-html="page.header" />
    <section class="card">
      <div class="card__content">
        <p v-html="page.intro" />
      </div>
    </section>
    <List :companies="companies" />
    <section
      v-for="(section, index) in page.sections"
      :key="index"
      :id="section.title | toSlug"
      class="card card--spaced"
    >
      <p v-if="section.title" class="card__header">{{ section.title }}</p>
      <div class="card__content" v-html="section.content" />
    </section>
    <!-- {{ companies }} -->
  </div>
</template>

<script>
import _ from 'lodash'
import Markdownit from 'markdown-it'
const md = new Markdownit()
import List from '~/components/List'

export default {
  async asyncData({ params, payload }) {
    if (payload) return { page: payload.meta, companies: payload.companies }
    else
      return {
        page: await require(`~/assets/content/meta.json`)
      }
  },
  components: { List },
  computed: {
    companies() {
      return this.$store.state.companies
    }
  },
  mounted() {
    this.page.sections.map(section => {
      section.content = md.render(section.content)
      return section
    })
  },
  filters: {
    toSlug: str => {
      return str.toLowerCase().replace(/\s+/g, '-')
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>
