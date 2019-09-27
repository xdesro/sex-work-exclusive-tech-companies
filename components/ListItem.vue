<template>
  <div class="company">
    <!-- {{company}} -->
    <p class="company__title">{{company.title}}</p>
    <div class="company__description" v-html="$md.render(company.body)" />
    <a class="company__link" :href="company.link">read more</a>
  </div>
</template>

<script>
export default {
  props: ['company']
}
</script>