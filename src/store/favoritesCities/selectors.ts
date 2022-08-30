import { createSelector } from 'reselect';
import { AppState} from "../rootReducer";


const selectFavorite =  (state:AppState) => state.favoritesCities.favorites

export const selectSetFavorites =
  createSelector(
    selectFavorite,
    (favorite)=>favorite
    
  );


