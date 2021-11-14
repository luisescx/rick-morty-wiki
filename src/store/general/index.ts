import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { StateGeneralInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutation from './mutations';

const general: Module<StateGeneralInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations: mutation,
  state,
};

export default general;
