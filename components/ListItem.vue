<template>
  <div :class="this.isActive ? 'company company--active' : 'company'">
    <header class="company__header" v-bind:class="{ jsFallback: jsEnabled }">
      <p class="company__title">{{ title }}</p>
      <button
        class="company__toggle"
        id="detailsButton"
        v-bind:class="{ jsFallback: jsEnabled }"
        type="button"
        @click="toggleActive"
      >{{ this.isActive ? 'close' : 'details' }}</button>
    </header>
    <div class="company__content" v-if="isActive">
      <div class="company__description" v-html="parsedContent" />
      <a class="company__link" :href="link">read more</a>
    </div>
    <div class="company__content" v-bind:class="{ jsFallback: jsEnabled }">
      <div class="company__description" v-html="parsedContent" />
      <a class="company__link" :href="link">read more</a>
    </div>
  </div>
</template>

<script>
import Markdownit from 'markdown-it'
const md = new Markdownit()

export default {
  props: {
    content: String,
    id: String,
    title: String,
    link: String
  },
  data: function() {
      return {
        jsEnabled: false
      }
    },
  computed: {
    isActive() {
      return this.id === this.$store.state.activeCompany
    },
    parsedContent() {
      return md.render(this.content)
    }
  },
  methods: {
    toggleActive() {
      this.$store.commit(
        'setActiveCompany',
        this.id === this.$store.state.activeCompany ? null : this.id
      )
    }
  },
  mounted() {
    this.jsEnabled = true
  }
}
</script>
