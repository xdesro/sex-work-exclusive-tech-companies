<template>
  <section class="companies-list" id="the-list">
    <div class="companies-list__header">the list</div>
    <Search @input="handleInput" />
    <ListItem v-for="company in companies" v-bind="company" :key="company.id" />
  </section>
</template>

<script>
import Search from './Search'
import ListItem from './ListItem'

export default {
  data() {
    return {
      activeId: null,
      search: ''
    }
  },
  computed: {
    filteredCompanies() {
      // return this.companies.filter(company => {
      //   if (this.search.length == 0) {
      //     return true
      //   }
      //   return company.title.toLowerCase().includes(this.search.toLowerCase())
      // })
    }
  },
  props: ['companies'],
  components: {
    Search,
    ListItem
  },
  methods: {
    handleInput(input) {
      this.search = input
    }
  }
}
</script>