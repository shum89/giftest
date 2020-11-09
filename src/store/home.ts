/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  MutationTree, ActionTree, GetterTree,
} from 'vuex';
import axios from 'axios';

interface Original {
  [key: string]: string;
}
interface Images {
  [key: string]: Original;
}
interface Data {
  [key: string]: Images;
}

interface State {
  [key: string]: Data;
}
export const state: State = {
  data: {
    images: {
      original: {
      },
    },
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
};

export const home = {
  state,
  mutations,
  getters,
  actions,
};

export default home;
