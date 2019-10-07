<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 500 500"
    :class="left ? 'rotator rotator--left' : 'rotator'"
    fill="currentColor"
    role="presentation"
  >
    {{left}}
    <defs>
      <path
        id="a"
        d="M243.2 382.4c-74.8 0-135.5-60.7-135.5-135.5s60.7-135.5 135.5-135.5 135.5 60.7 135.5 135.5S318 382.4 243.2 382.4z"
      />
    </defs>
    <text dy="70" textLength="800">
      <textPath xlink:href="#a">Sex Work IS Work.</textPath>
    </text>
  </svg>
</template>

<script>
import { TweenLite } from 'gsap'

export default {
  props: ['left'],
  data() {
    return {
      rotation: { deg: 0 }
    }
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {
    console.log(this.left)
    document.addEventListener('scroll', this.handleScroll)
    this.$nextTick(() => {
      TweenLite.ticker.addEventListener('tick', this.updateAnimation)
    })
  },
  methods: {
    handleScroll(e) {
      TweenLite.to(this.rotation, 1, {
        deg: window.scrollY / 20
      })
    },
    updateAnimation() {
      this.$el.style.setProperty(
        '--rotatorDeg',
        `${this.rotation.deg * (this.left ? -1 : 1)}deg`
      )
    }
  }
}
</script>