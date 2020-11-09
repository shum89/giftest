import {
  createStore,
} from 'vuex';
import { home } from './home';
import { history } from './history';

export const store = createStore({
  modules: {
    history,
    home,
  },
});

export default store;
