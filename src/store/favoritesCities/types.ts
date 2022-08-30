import { SET_FAVORITES } from './actionsType';

 export interface FavoritesCitiesState{
    favorites:any
    
  }

  export interface SetFavorites {
    type: typeof SET_FAVORITES;
    payload: any;
    
  }

  export type FavoritesCitiesActions =
  SetFavorites