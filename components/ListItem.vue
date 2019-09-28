<template>
  <div class="company">
    <header class="company__header">
      <p class="company__title">{{ title }}</p>
      <button
        class="company__toggle"
        @click="toggleActive"
      >{{ this.isActive ? 'close' : 'details' }}</button>
    </header>
    <div class="company__content" v-if="isActive">
      <div class="company__description" v-html="content" />
      <a class="company__link" :href="link">read more</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
    id: String,
    title: String,
    link: String
  },
  computed: {
    isActive() {
      return this.id === this.$store.state.activeCompany
    }
  },
  mounted() {
    console.log(this)
  },
  methods: {
    toggleActive() {
      this.$store.commit(
        'setActiveCompany',
        this.id === this.$store.state.activeCompany ? null : this.id
      )
    }
  }
}
</script>