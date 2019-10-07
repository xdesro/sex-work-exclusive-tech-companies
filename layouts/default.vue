<template>
  <div class="container">
    <Navbar />
    <nuxt />
    <Rotator />
    <Rotator left="true" />
    <Footer />
  </div>
</template>

<script>
import '~/assets/scss/style.scss'
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
import Rotator from '~/components/Rotator'
export default {
  components: {
    Navbar,
    Footer,
    Rotator
  }
}
</script>