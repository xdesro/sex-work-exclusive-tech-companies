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
      :id="section.title | toSlug"
      :key="index"
      class="card card--spaced"
    >
      <p v-if="section.title" class="card__header">{{ section.title }}</p>
      <div class="card__content" v-html="section.content" />
    </section>
  </div>
</template>

<script>
import _ from 'lodash'
import * as matter from 'gray-matter'

import Markdownit from 'markdown-it'
const md = new Markdownit()
import List from '~/components/List'

export default {
  async asyncData({ params, payload }) {
    if (payload)
      return {
        page: payload.meta,
        companies: payload.companies.map(company => matter(company))
      }
    else
      return {
        page: await require(`~/assets/content/meta.json`)
      }
  },
  components: { List },
  computed: {
    companies() {
      const frontMattered = [...this.$store.state.companies].map(company =>
        matter(company)
      )
      return frontMattered
    }
  },
  mounted() {
    this.page.sections.forEach(section => {
      section.content = md.render(section.content)
    })
    this.page.intro = md.render(this.page.intro)
  },
  filters: {
    toSlug: str => {
      return str.toLowerCase().replace(/\s+/g, '-')
    }
  }
}
</script>
