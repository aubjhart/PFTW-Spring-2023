<script setup>
    import {RouterLink} from "vue-router";
    import TotemData from "../assets/totem-data.json"
    defineProps(["id", "item", "image"]);
</script>

<template>
        <link rel="stylesheet" href="https://use.typekit.net/dsf6klq.css">
        <div class="totem-row">
            <div>
                <img class="totem-row__image" :src="`${image}`" :alt="item">
            </div>
            <div class="footer">
                <RouterLink :to="`${id}`">{{ item }}</RouterLink>
            </div>
        </div>

    
</template>

<style scoped>

    
     .totem-row {
        width: 25%;
        border: solid 2px #2d2137;
        margin-right: 40px;
        margin-bottom: 40px;
        padding: 25px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        height: 250px;
    }

    .router-link-active {
      text-decoration: none;
    }


    .totem-row:hover {
        background-color: #c998ee;
    }

    .totem-row__imageinfo {
        display: flex;
        flex-direction: row;
    }
    .totem-row__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .totem-row__image {
        margin: 20px;
        margin-right: 30px;
        border-radius: 10px;
        width: 100px;
    }

    .footer {
        background-color: #3d3146;
        border-radius: 5px;
        height: 55px;
        border: none;
        width: 200px;
        font-family: "freight-big-pro", serif;
        font-weight: 400;
        font-style: normal;
        font-size: 20px;
        display: flex;
        justify-content: center;
}

    .footer a {
            color: #c998ee;
            text-decoration: none;
            line-height: 2.65em;
            letter-spacing: .035em;
    }

    .footer:hover {
        background-color: #2d2137;
    }


</style>