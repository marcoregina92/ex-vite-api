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
        <h3>{{ "Postal Code: " + brewery.postal_code }}</h3>
        <h3>{{ "Phone: " + brewery.phone }}</h3>
        <h3>{{ "Website: " + brewery.website_url }}</h3>
    </div>
</template>

<style scoped>
.card {
    width: calc(100% / 5 - 13px);
    /* background-image: url(https://katsgoneglobal.com/wp-content/uploads/2021/06/Map-of-Scotland.jpg); */
    background-color: goldenrod;
    background-image: url("https://i.pinimg.com/originals/84/28/ad/8428ad6f2ce025f4a334ca52fb243ca1.jpg");
    background-size: cover;
    background-position: 90px;
    border-radius: 20px;
    padding: 20px;
    margin: 5px;
    border: 2px solid black;
}

h1 {
    font-size: 25px;
}

h3 {
    font-size: 10px;
    color: black
}
</style>