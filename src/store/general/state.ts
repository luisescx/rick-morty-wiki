import { ScreenType } from 'src/common/enums';

export interface StateGeneralInterface {
  screen: ScreenType;
}

function state(): StateGeneralInterface {
  return {
    screen: ScreenType.CHARACTERS,
  };
}

export default state;
