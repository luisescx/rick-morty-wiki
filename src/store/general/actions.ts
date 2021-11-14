import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { StateGeneralInterface } from './state';

const actions: ActionTree<StateGeneralInterface, StateInterface> = {
  changeScreenButton({ commit }, screen) {
    commit('changeScreenButtonMutation', screen);
  },
};

export default actions;
