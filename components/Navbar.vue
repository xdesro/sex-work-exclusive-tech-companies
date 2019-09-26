<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__list-item">
          <a href="#" class="nav__list-link">the list</a>
        </li>
        <li class="nav__list-item">
          <a href="#" class="nav__list-link">why it matters</a>
        </li>
        <li class="nav__list-item">
          <a href="#" class="nav__list-link">what to do about it</a>
        </li>
        <li class="nav__list-item">
          <a href="#" class="nav__list-link">
            <Icon name="github" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Icon from './Icon'

export default {
  components: {
    Icon
  }
}
</script>