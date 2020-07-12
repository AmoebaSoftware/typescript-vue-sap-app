<template>
  <div id="app">
    <AppHeader></AppHeader>
    <fd-container centered>
      <ProductTable v-bind:products="products" v-if="!isLoading"/>
    </fd-container>
  </div>
</template>

<script>
import ProductTable from './components/ProductTable'
import AppHeader from './components/AppHeader';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    ProductTable,
    AppHeader,
  },
  data() {
    return {
      isLoading: true,
      products: null
    }
  },
  mounted () {
    axios
      .get('https://services.odata.org/Experimental/OData/OData.svc/Products')
      .then(response => (this.products = response.data.value))
      .then(() => this.isLoading = false)
      .catch((err) => console.error(err))
  },
}
</script>

<style lang='scss'>
  @import "./scss/main.scss";
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  table {
    margin-top: 3rem;
  }
</style>
