<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <h1>
      <RouterLink to="/">My Totem Collection</RouterLink>
    </h1>

    <RouterView></RouterView>
  </div>
</template>

<style scoped>

h1 {
        font-family: "lisbeth-display", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 72px;
        margin: 0;
        color: #2d2137;
        padding-bottom: 50px;
        margin-top: 30px ;
        text-decoration: none;
    }

    .router-link-active {
      text-decoration: none;
    }

  .container {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
