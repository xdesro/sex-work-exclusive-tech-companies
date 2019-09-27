<template>
  <section class="companies-list" id="the-list">
    <div class="companies-list__header">the list</div>
    <Search />
    <ListItem v-for="company in companies" v-bind="company" :key="company.slug" />
  </section>
</template>

<script>
import Search from './Search'
import ListItem from './ListItem'

export default {
  data() {
    return {
      activeId: null
    }
  },
  props: ['companies'],
  components: {
    Search,
    ListItem
  }
}
</script>