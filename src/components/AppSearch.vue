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
        <input v-model="store.searchString" type="text" placeholder="Cerca">
        <button @click="search">Search by Postal Code</button>
    </div>
</template>





<style scoped></style>