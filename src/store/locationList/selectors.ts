import { createSelector } from 'reselect';
import { AppState} from "../rootReducer";
import { initialState } from './reducer';

const selectLocationListhMain =(state: AppState)  => state?.locationList || initialState;

const selectorLocation=(state:AppState)=> state.locationList.locations;

const selectorPending=(state:AppState)=> state.locationList.pending;

const selectorError=(state:AppState)=> state.locationList.error;


 export const selectLocations =
  createSelector(
    selectorLocation,
    (location)=>location
  );

  export const selectPending=
  createSelector(
    selectorPending,
    (pending)=>pending
  );

  export const  selectError =
  createSelector(
    selectorError,
    (error)=> error,
  );