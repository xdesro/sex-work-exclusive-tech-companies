<template>
  <div class="container">
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import '~/assets/scss/style.scss'
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>