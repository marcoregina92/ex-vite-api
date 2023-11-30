<script>
import axios from 'axios';
import { store } from "./store.js"
import AppBreweryCard from './components/AppBreweryCard.vue';

export default {
  components: {
    AppBreweryCard
  },
  data() {
    return {
      store,
    }
  },
  mounted() {
    this.breweryList();
    console.log(this.store)
  },
  methods: {

    breweryList() {
      axios.get(this.store.brewApi).then(result => {
        this.store.breweries = result.data;
      }
      )
    }
  }
}
</script>


<template>
  <AppBreweryCard v-for="brewery in store.breweries" :brewery="brewery" />
</template>





<style scoped></style>
