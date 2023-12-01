import { reactive } from 'vue'

export const store = reactive({
    brewApi: "https://api.openbrewerydb.org/v1/breweries?by_country=scotland&per_page=10",
    breweries: [],
    searchString: ""
});