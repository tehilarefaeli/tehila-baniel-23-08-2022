import { createSelector } from "reselect";
import { AppState} from "../rootReducer";
import { initialState } from "./reducer"

const selectPendings = (state:AppState) =>state.dailyWeather.pending || initialState;
const selectLocations = (state:AppState) =>state.dailyWeather.location || initialState;
const selectLocationKeys = (state:AppState) =>state.dailyWeather.locationKey || initialState;
const selectDailyWeathers= (state:AppState) =>state.dailyWeather.dailyWeather || initialState;


export const selectPending = 
  createSelector(
    selectPendings,
   (pending)=>pending
);

 export const selectLocation = 
  createSelector(
    selectLocations,
    (location)=>location,
  );

  export const selectLocationKey = 
  createSelector(
    selectLocationKeys,
   (locationKey) =>locationKey,
  );

  export const selectDailyWeather = 
  createSelector(
    selectDailyWeathers,
    (dailyWeather)=>dailyWeather,
  );