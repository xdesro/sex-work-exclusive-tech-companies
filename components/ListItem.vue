<template>
  <div class="company">
    <!-- {{company}} -->
    <p class="company__title">{{title}}</p>
    <div class="company__description" v-html="$md.render(body)" />
    <a class="company__link" :href="link">read more</a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    body: String,
    link: String
  }
}
</script>