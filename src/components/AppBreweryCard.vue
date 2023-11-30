<script>

export default {
    name: "AppBeerCard",
    props: {
        brewery: Object
    }
}
</script>

<template>
    <h1>{{ brewery.name }}</h1>
    <h3>{{ "Country: " + brewery.country }}</h3>
    <h3>{{ "City: " + brewery.city }}</h3>
    <h3>{{ "Phone: " + brewery.phone }}</h3>
    <h3>{{ "Website: " + brewery.website_url }}</h3>
</template>

<style scoped>
h2 {
    color: white;
}
</style>