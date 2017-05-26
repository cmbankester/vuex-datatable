import {useWith, path, split, defaultTo, isNil, both, complement, prop, toLower, compose, ascend, descend, sort, ifElse, has, identity} from 'ramda';

// normalize: lower-cases strings, defaults nils to empty string
const normalize = ifElse(both(complement(isNil), has('toLowerCase')), toLower, defaultTo(''));
const dotPath = useWith(path, [split('.')]);

export default (array_name, opts = {}) => ({
  namespaced: true,
  state: {
    perPage: opts.perPage || 100,
    sortDir: opts.sortDir || 'asc',
    sortBy: opts.sortBy || null
  },
  actions: {
    sortBy({commit, state}, col) {
      if (state.sortBy === col) {
        commit('CHANGE_SORT_DIR');
      } else {
        commit('SORT_BY', col);
      }
    }
  },
  getters: {
    rows(state, getters, rootState) {
      return dotPath(array_name, rootState);
    },
    sortFn(state, getters) {
      return state.sortDir === 'asc' ? ascend : descend;
    },
    sortedRows(state, getters, rootState) {
      if (isNil(state.sortBy)) return getters.rows;
      return sort(getters.sortFn(compose(normalize, prop(state.sortBy))), getters.rows);
    },
    pagedRows(state, getters, rootState) {

    }
  },
  mutations: {
    SORT_BY(state, col) {
      state.sortBy = col;
    },
    CHANGE_SORT_DIR(state) {
      state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
    }
  }
});