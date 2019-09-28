<template>
  <div class="search">
    <input
      type="search"
      class="search__input"
      placeholder="search"
      @input="$emit('input', $event.target.value)"
    />
    <Icon name="search" class="search__icon" />
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