<template>
  <div class="search">
    <input type="search" class="search__input" placeholder="search" />
    <button class="search__button">
      <Icon name="search" class="search__icon" />
    </button>
  </div>
</template>

<script>
import Icon from './Icon'
export default {
  components: {
    Icon
  }
}
</script>