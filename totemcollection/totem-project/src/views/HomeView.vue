<script setup>
    import {RouterLink} from 'vue-router';
</script>

<template>
    <link rel="stylesheet" href="https://use.typekit.net/dsf6klq.css">
    <div>
        <section class="container">
            <div>
                <img src="https://images.unsplash.com/photo-1567113463224-37cf03ba4577?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="an image of a crystal in the shape of a heart">
            </div>
            <div class="words">
                <h2>Typically I consider myself a bit of a minimalist, but when it comes to totems I can't resist sentimental bits and pieces!</h2>
                <RouterLink to="/totems">Check out my totem collection!</RouterLink>
            </div>
        </section>
    </div>
</template>

<style scoped>

.container {
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;

}

.words {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 20%;
    padding: 100px;
}

img {
    width: 600px;
    border-radius: 10px;
}

h2 {
        font-family: "freight-macro-pro", serif;
        font-weight: 400;
        font-style: normal;
        font-size: 24px;
        margin-top: 5px;
        margin-bottom: 30px;
    }

a {
    background-color: #3d3146;
        color: #c998ee;
        border: none;
        font-family: "freight-big-pro", serif;
        font-weight: 400;
        font-style: normal;
        font-size: 20px;
        width: 275px;
        border-radius: 5px;
        height: 55px;
        text-decoration: none;
        line-height: 2.65em;
        padding-left: 20px;
        letter-spacing: .035em;
}

a:hover {
    background-color: #2d2137;
}

</style>