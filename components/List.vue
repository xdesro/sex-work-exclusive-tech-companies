<template>
  <section class="companies-list" id="the-list">
    <div class="companies-list__header">the list</div>
    <Search @input="handleInput" />
    <div
      class="companies-list__alpha"
      v-for="(letter, index) in Object.keys(filteredCompanies)"
      :key="index"
    >
      <span class="companies-list__alpha-header">{{ letter }}</span>
      <ListItem v-for="company in filteredCompanies[letter]" v-bind="company" :key="company.id" />
    </div>
    <div
      v-if="Object.keys(filteredCompanies).length === 0"
      class="card card--compact card--disabled"
    >
      <p class="card__content">No results found.</p>
    </div>
  </section>
</template>

<script>
import _ from 'lodash'
import * as matter from 'gray-matter'

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
    sortedCompanies() {
      const formatted = [...this.companies].map(company => {
        return {
          content: company.content,
          title: company.data.title,
          id: _.uniqueId(),
          link: company.data.link
        }
      })
      const grouped = _.groupBy(formatted, company =>
        company.title[0].toUpperCase()
      )
      return grouped
    },
    filteredCompanies() {
      if (this.search.length === 0) {
        return this.sortedCompanies
      }
      const companies = {}
      Object.keys(this.sortedCompanies).forEach((letter, index) => {
        const letterIsActive = this.sortedCompanies[letter].some(company => {
          return company.title.toLowerCase().includes(this.search)
        })
        if (letterIsActive) {
          Object.assign(companies, {
            [letter]: [...this.sortedCompanies[letter]].filter(company =>
              company.title.toLowerCase().includes(this.search)
            )
          })
        }
        //
      })
      return companies
    }
  },
  mounted() {},
  props: ['companies'],
  components: {
    Search,
    ListItem
  },
  methods: {
    handleInput(input) {
      this.search = input.toLowerCase()
    }
  }
}
</script>