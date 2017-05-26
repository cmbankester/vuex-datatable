<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th @click="sortBy('Name')">Name</th>
        <th @click="sortBy('Email')">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in pagedRows">
        <td>{{ row.ID }}</td>
        <td>{{ row.Name }}</td>
        <td>{{ row.Email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import store from './store';

  export default {
    name: 'table',
    data() {
      return {

      };
    },
    created() {
      this.$store.dispatch('getRows');
    },
    store,
    methods: {
      ...mapActions([
        'dataTable/sortBy'
      ])
    },
    computed: {
      ...mapGetters([
        'dataTable/pagedRows'
      ])
    }
  };
</script>