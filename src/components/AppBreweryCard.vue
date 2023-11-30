<script>

export default {
    name: "AppBeerCard",
    props: {
        brewery: Object
    }
}
</script>

<template>
    <div class="card">
        <h1>{{ brewery.name }}</h1>
        <h3>{{ "Country: " + brewery.country }}</h3>
        <h3>{{ "City: " + brewery.city }}</h3>
        <h3>{{ "Phone: " + brewery.phone }}</h3>
        <h3>{{ "Website: " + brewery.website_url }}</h3>
    </div>
</template>

<style scoped>
.card {
    width: calc(100% / 5 - 16px);
    background-color: goldenrod;
    padding: 3px;
    margin: 5px;
}

h3 {
    color: rgb(58, 54, 54)
}
</style>