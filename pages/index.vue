<template>
  <div>
    <h1 class="main-title" v-html="page.header" />
    <section class="card" v-html="page.intro" />
    <section class="card" v-for="(section, index) in page.sections" :key="index">
      <p class="card__header" v-if="section.title">{{ section.title }}</p>
      <div class="card__content" v-html="$md.render(section.content)" />
    </section>
    <!-- {{page}} -->
    <!-- {{companies}} -->
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  async asyncData({ params, payload }) {
    if (payload) return { page: payload }
    else
      return {
        page: await require(`~/assets/content/meta.json`)
      }
  },
  computed: {
    companies() {
      return this.$store.state.companies
    }
  },
  components: {
    Logo
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
