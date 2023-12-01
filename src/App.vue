<script>
import axios from 'axios';
import { store } from "./store.js"
import AppBreweryCard from './components/AppBreweryCard.vue';
import AppSearch from './components/AppSearch.vue';


export default {
  components: {
    AppBreweryCard,
    AppSearch
  },
  data() {
    return {
      store,
    }
  },
  mounted() {
    this.breweryList();
  },
  methods: {

    breweryList() {
      axios.get(this.store.brewApi).then(result => {
        this.store.breweries = result.data;
      }
      )
    },
    cerca() {
      let indirizzo = `${this.store.brewApi}&by_postal=${this.store.searchString.toUpperCase()}`

      axios.get(indirizzo).then(result => {
        this.store.breweries = result.data;
      });
    }

  }
}
</script>


<template>
  <header>
    <AppSearch @search="cerca" />
  </header>
  <main>
    <h1>Le Birrerie più famose della Scozia </h1>
    <div class="cardWrapped">
      <AppBreweryCard v-for="brewery in store.breweries" :brewery="brewery" />
    </div>
  </main>
</template>





<style scoped>
.cardWrapped {
  display: flex;
  flex-wrap: wrap;
}

h1 {
  text-align: center;
  margin: 20px;
}
</style>
