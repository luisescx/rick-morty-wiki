import { ScreenType } from 'src/common/enums';
import { MutationTree } from 'vuex';
import { StateGeneralInterface } from './state';

const mutation: MutationTree<any> = {
  changeScreenButtonMutation(
    state: StateGeneralInterface,
    payload: ScreenType
  ) {
    state.screen = payload;
  },
};

export default mutation;
