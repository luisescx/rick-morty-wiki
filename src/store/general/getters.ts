import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { StateGeneralInterface } from './state';

const getters: GetterTree<StateGeneralInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
