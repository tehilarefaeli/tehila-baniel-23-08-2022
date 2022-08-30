import { SET_FAVORITES } from './actionsType';
import { FavoritesCitiesState, FavoritesCitiesActions} from "./types";

export const initialState: FavoritesCitiesState = {
  favorites: JSON.parse(localStorage.getItem('Favorites') || "" ) || []
};

const favoritesCitiesReducer = (state = initialState, action:FavoritesCitiesActions) => {
  switch (action.type) {
    case SET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
};

export default favoritesCitiesReducer;