/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  MutationTree, ActionTree, GetterTree,
} from 'vuex';

interface Data {
  [key: string]: string;
}

interface State {
  [key: string]: Data[] ;
}
const state: State = {
  downloaded: [],
};
interface Payload {
  name: string;
  value: [];
}

export const mutations: MutationTree<State> = {
  setStateGif(stateGif: State, payload: Payload) {
    const { name, value } = payload;
    stateGif[name] = value;
    return stateGif;
  },
  /**
   * deleteGif mutation
   * @param stateGif
   * @param id
   */
  deleteGifMutation(stateGif: State, id: string) {
    const newState = stateGif.downloaded.filter((item) => item.id !== id);
    stateGif.downloaded = newState;
    localStorage.setItem('data', JSON.stringify(newState));
  },
};

export const actions: ActionTree<State, any> = {
  downloadGif(store) {
    store.commit('setStateGif', {
      name: 'downloaded',
      value: JSON.parse(localStorage.getItem('data') || '[]'),
    });
  },
  deleteGif(store, payload: string) {
    store.commit('deleteGifMutation', payload);
  },
};

export const getters: GetterTree<State, any> = {
  /**
   * Downloaded gif getter
   * @param stateForGifData
   */
  getGifData(stateForGifData: State) {
    return stateForGifData.downloaded;
  },
};

export const history = {
  state,
  mutations,
  getters,
  actions,
};

export default history;
