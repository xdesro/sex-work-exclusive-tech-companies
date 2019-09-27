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
      <div class="card__content" v-html="$md.render(section.content)" />
    </section>
    <!-- {{ companies }} -->
  </div>
</template>

<script>
import List from '~/components/List'
export default {
  components: { List },
  computed: {
    companies() {
      return this.$store.state.companies
    }
  },
  filters: {
    toSlug: val => {
      return val.toLowerCase().replace(/\s+/g, '-')
    }
  },
  async asyncData({ params, payload }) {
    if (payload) return { page: payload.meta, companies: payload.companies }
    else
      return {
        page: await require(`~/assets/content/meta.json`)
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
