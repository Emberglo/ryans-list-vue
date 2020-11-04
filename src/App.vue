<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <h2>Ryan's List</h2>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Cars'}">Cars</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Houses'}">Houses</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Jobs'}">Jobs</router-link>
          </li>
        </ul>
      </div>
      <button class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </div>
  <router-view />
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  setup() {
    return { appState: computed(() => AppState) }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: black;
    font-size: 1.5em;
  }

  li {
    margin-left: 1em;
  }

</style>
