<script setup>
    import {RouterLink} from "vue-router";
    import TotemData from "../assets/totem-data.json"
    import TotemCard from "../components/TotemCard.vue"
</script>

<template>
    <link rel="stylesheet" href="https://use.typekit.net/dsf6klq.css">
    <div class="container">
        <TotemCard 
            :key="totem.id" 
            v-for="totem in TotemData" 
            :id="totem.id" 
            :item="totem.item" 
            :image="totem.image"
            />
    </div>
</template>

<style scoped>

.container {
        font-family: "freight-big-pro", serif;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        margin: 0;
        padding: 50px;
        color: #3F3047;
        letter-spacing: .25px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .container--rows {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin-top: 50px;
    }

    h1 {
        font-family: "lisbeth-display", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 72px;
        color: #2d2137;
    }

</style>