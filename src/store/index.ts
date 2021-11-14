import { store } from 'quasar/wrappers';
import { ScreenType } from 'src/common/enums';
import Vuex from 'vuex';
import general from './general';

export interface StateInterface {
  general: GeneralState;
}

export interface GeneralState {
  screen: ScreenType;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<any>({
    modules: {
      general,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING,
  });

  return Store;
});
