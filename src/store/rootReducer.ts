import { combineReducers } from "redux";
import dailyWeatherReducer from "./dailyWeather/reducer";
import locationListReducer from "./locationList/reducer";
import favoritesCitiesReducer from "./favoritesCities/reducer";
import tempTypeReducer from "./temp/reducer";

const rootReducer = combineReducers({
  dailyWeather: dailyWeatherReducer,
  locationList: locationListReducer,
  favoritesCities: favoritesCitiesReducer,
  temp:tempTypeReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;