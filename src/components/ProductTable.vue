<template>
  <div>
    <fd-search-input v-model="searchTerm" placeholder="Search" />
    <fd-table :headers="headers" :items="filteredProducts">
      <template #row="{ item }">
        <fd-table-row>
          <template #Name>
            <fd-table-cell>{{ item.Name }}</fd-table-cell>
          </template>
          <template #Description>
            <fd-table-cell>{{ item.Description }}</fd-table-cell>
          </template>
          <template #ReleaseDate>
            <fd-table-cell>{{ item.ReleaseDate }}</fd-table-cell>
          </template>
          <template #Rating>
            <fd-table-cell>{{ item.Rating }}</fd-table-cell>
          </template>
          <template #Price>
            <fd-table-cell>{{ item.Price }}</fd-table-cell>
          </template>
        </fd-table-row>
      </template>
    </fd-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class AppHeader extends Vue {
  @Prop() products!: any[];
  searchTerm = '';
  headers = [
    {
      key: 'Name',
      label: 'Name',
      sortable: true,
      sortBy: 'Name',
    },
    'Description',
    {
      label: 'Release Date',
      key: 'ReleaseDate',
      sortable: true,
      sortBy: 'ReleaseDate',
    },
    {
      label: 'Rating',
      key: 'Rating',
      sortable: true,
      sortBy: 'Rating',
    },
    {
      label: 'Price',
      key: 'Price',
      sortable: true,
      sortBy: 'Price',
    },
  ];

  getFilteredCollection(collection: any[], searchTerm: string, searchProp: string[]): any[] {
    return !searchTerm
      ? collection
      : this.filterItems(collection, searchTerm, searchProp);
  }

  filterItems(items: any[], searchTerm: string, keys: string[]): any[] {
    return items.filter((item) =>
      keys.some((key) =>
        String(item[key])
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
  }

  get filteredProducts() {
    return this.getFilteredCollection(this.products, this.searchTerm, [
      'Name',
      'Description',
    ]);
  }
}
</script>

<style scoped></style>
