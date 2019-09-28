<template>
  <div class="company">
    <!-- {{company}} -->
    <header class="company__header">
      <p class="company__title">{{title}}</p>
      <button
        class="company__toggle"
        @click="toggleActive"
      >{{ this.isActive ? 'close' : 'details' }}</button>
    </header>
    <div class="company__content" v-if="isActive">
      <div class="company__description" v-html="$md.render(body)" />
      <a class="company__link" :href="link">read more</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    body: String,
    link: String,
    id: String
  },
  computed: {
    isActive() {
      return this.id === this.$store.state.activeCompany
    }
  },
  mounted() {
    console.log(this.$store.state.activeCompany === this.id)
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