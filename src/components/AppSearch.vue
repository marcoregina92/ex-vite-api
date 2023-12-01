<script>
import { store } from "../store.js"
import axios from 'axios';


export default {
    nane: "AppSearch",
    data() {
        return {
            store,
            searchString: ""
        }
    },
    methods: {
        search() {
            console.log("Cerca: ", this.searchString)
            this.$emit("search")
        },
    },
    mounted() {

    }
}

</script>




<template>
    <div>
        <input v-model="searchString" type="text" placeholder="Cerca">
        <button @click="search">Search by Postal Code</button>
    </div>
</template>





<style scoped></style>