import { all, fork } from "redux-saga/effects";
import getLocationKeySaga from "./dailyWeather/saga";
import getDailyWeatherSaga from "./dailyWeather/saga"
import locationsSearch from "./locationList/saga"

export function* rootSaga() {
  yield all([fork(getDailyWeatherSaga),
    fork(getLocationKeySaga),
    fork(locationsSearch)
  ]);
}