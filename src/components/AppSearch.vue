<script>
import { store } from "../store.js"
import axios from 'axios';


export default {
    nane: "AppSearch",
    data() {
        return {
            store,
        }
    },
    methods: {
        search() {
            console.log("Cerca: ", this.store.searchString)
            this.$emit("search")
        },
    },
    mounted() {

    }
}

</script>




<template>
    <div>
        <input v-model="store.searchString" @keyup="$emit('search')" type="text" placeholder="Cerca">
        <button @click="search">Search by Postal Code</button>
    </div>
</template>





<style scoped>
input {
    padding: 5px;
    margin: 10px;
    border-radius: 10px;
    border: 2px solid black;
}

button {
    padding: 5px;
    color: goldenrod;
    background-color: black;
    border-radius: 10px;
    border: 2px solid goldenrod;
    cursor: pointer;
    font-size: 10px;
}
</style>