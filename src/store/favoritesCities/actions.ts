

import { SET_FAVORITES } from './actionsType';
import{ SetFavorites} from "./types";

export const setFavorites = (favorites:any):SetFavorites => ({
  type: SET_FAVORITES,
  payload: favorites,
});

