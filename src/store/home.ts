import {
  MutationTree, ActionTree, GetterTree,
} from 'vuex';
import axios from 'axios';

interface State {
  data: {
    images: {
      original: {
        [key: string]: string;
      };
    };
    title: string;
    username: string;
  };
}
export const state: State = {
  data: {
    images: {
      original: {
        mp4: '',
        url: '',
      },
    },
    title: '',
    username: '',
  },
};

export const mutations: MutationTree<State> = {
  setState(stateGif, data) {
    stateGif.data = data;
    return stateGif;
  },
};

export const actions: ActionTree<State, State> = {
  async fetchGif(store) {
    try {
      const resp = await axios.get(' https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA');
      store.commit('setState', resp.data.data);
    } catch (err) {
      console.log(err);
    }
  },
};

export const getters: GetterTree<State, State> = {
  getGifMp4(stateForGif) {
    return stateForGif.data.images.original.mp4;
  },
  getGif(stateForGif) {
    return stateForGif.data.images.original.url;
  },
  getData(data) {
    return data.data;
  },
  getAlt(data) {
    return data.data.title;
  },
  getUserName(data) {
    return data.data.username;
  },
};

export const home = {
  state,
  mutations,
  getters,
  actions,
};

export default home;
