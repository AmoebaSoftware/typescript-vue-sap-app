<template>
  <div id="app">
    <AppHeader></AppHeader>
    <fd-container centered>
      <ProductTable v-bind:products="products" v-if="!isLoading" />
    </fd-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductTable from '@/components/ProductTable.vue';
import AppHeader from '@/components/AppHeader.vue';
import axios from 'axios';

@Component({
  components: {
    ProductTable,
    AppHeader,
  },
})
export default class App extends Vue {
  private readonly endpointUrl = 'https://services.odata.org/Experimental/OData/OData.svc/Products';
  private isLoading = true;
  private products: any;

  mounted() {
    axios
      .get(this.endpointUrl)
      .then((response) => (this.products = response.data.value))
      .then(() => (this.isLoading = false))
      .catch((err) => console.error(err));
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
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
