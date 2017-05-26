import Vue from 'vue';
import Vuex from 'vuex';
import Datatable from 'vuex-datatable';

export default new Vuex.Store({
  actions: {
    getRows({commit}) {
      const rows = [ // E.g., an api call
        {ID: 1, Name: 'John Smith', Email: 'jsmith@example.com'},
        {ID: 2, Name: 'Jane Smith', Email: 'jane@smithindustries.net'},
        {ID: 3, Name: 'Smitty Werbenjagermanjensen', Email: 'smitty@mozilla.org'},
        {ID: 4, Name: 'Foo Bar', Email: 'foo@bar.com'},
        {ID: 5, Name: 'Bar Baz', Email: 'bar@baz.com'},
        {ID: 6, Name: 'Baz Quux', Email: 'baz@quux.com'},
        {ID: 7, Name: 'Quux Zuul', Email: 'quux@zuul.com'},
        {ID: 8, Name: 'Zuul Foo', Email: 'zuul@foo.com'}
      ];
      commit('SET_ROWS', rows);
    }
  },
  getters: {

  },
  mutations: {
    SET_ROWS(state, rows) {
      state.rows = rows;
    }
  },
  state: {
    foo: {
      rows: []
    }
  },
  modules: {
    // vuex-datatable/module is a function that takes
    // the name of the rows key on the store's main state
    // (dot-separated for nested objects) and an object of options
    dataTable: Datatable.module(
      'foo.rows', // dot-separated path to array of rows
      {
        perPage: 20,
        sortBy: 'Name', // the default column to sort by
        sortDir: 'asc' // the default direction to sort ('asc' or 'desc')
      }
    )
  }
});