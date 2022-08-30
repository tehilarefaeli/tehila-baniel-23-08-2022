import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { AppState} from "../rootReducer";

 const selecTypesMain = (state:AppState) => state.temp || initialState;

 const selectTypes =(state:AppState) => state.temp.isMetric

  export const selectIsMetric =
    createSelector(
      selectTypes,
        (isMetric)=>isMetric
    );
 



