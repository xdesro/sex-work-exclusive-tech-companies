<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__list-item">
          <a href="#the-list" class="nav__list-link">the list</a>
        </li>
        <li class="nav__list-item">
          <a href="#why-it-matters" class="nav__list-link">why it matters</a>
        </li>
        <li class="nav__list-item">
          <a href="#what-to-do-about-it" class="nav__list-link">what to do about it</a>
        </li>
        <li class="nav__list-item">
          <a
            href="https://github.com/xdesro/sex-work-exclusive-tech-companies"
            class="nav__list-link"
            aria-label="Visit the GitHub repo for this project"
          >
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