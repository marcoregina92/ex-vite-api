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
