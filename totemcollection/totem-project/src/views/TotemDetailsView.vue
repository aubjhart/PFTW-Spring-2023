<script setup>  
    import {useRoute, RouterLink} from 'vue-router';
    import TotemData from "../assets/totem-data.json"
    defineProps(["id", "item", "image"]);
    const Route = useRoute();
    const totemId = route.params.id;
    const TotemDetails = TotemData.find((totem) => {
        return totemId === totem.id;
    });

</script>

<template>
    <link rel="stylesheet" href="https://use.typekit.net/dsf6klq.css">
    <div>
        <div>
            <h2>{{ TotemDetails.item }}</h2>
            <img 
            class="totem-row__image" 
            :src="`${TotemDetails.image}`" 
            :alt="TotemDetails.item">
        </div>
        <div>
            <RouterLink to="/totems">Back to Collection</RouterLink>
        </div>
        <div>Description</div>
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
        }

    h2 {
            font-family: "freight-macro-pro", serif;
            font-weight: 400;
            font-style: normal;
            font-size: 24px;
            margin-top: 5px;
            margin-bottom: 15px;
        }

    .router-link-active {
      text-decoration: none;
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