import axios ,{AxiosResponse} from "axios";
import { all, call, put, takeLatest, fork, PutEffect,CallEffect } from "redux-saga/effects";
import {BASE_URL, SECRET_KEY  }from "../constData"
import { getLocationKeyError, getLocationKeySuccess,getDailyWeatherSuccess, getDailyWeatherError} from './actions'
import { GET_DAILY_WEATHER, GET_LOCATION_KEY } from "./actionTypes";
import { DailyWeather, GetLocationKeySuccess,GetDailyWeatherError, GetDailyWeatherSuccess, Location, GetLocationKeyError
} from './types';


const getLocation = (payload:any ) => 
  axios.get<Location>(`${BASE_URL}currentconditions/v1/${payload}?apikey=${SECRET_KEY}`);

const getDailyWeatherData = (payload:any, payload1:any ) => 
  axios.get<DailyWeather>(`${BASE_URL}forecasts/v1/daily/5day/${payload}?apikey=${SECRET_KEY}&metric=${payload1}`);


  
function* getLocationKeySaga( action: GetLocationKeySuccess) :Generator<
| CallEffect<AxiosResponse<Location>>
| PutEffect<GetLocationKeySuccess>
| PutEffect<GetLocationKeyError>,
void,
any> {
  const { payload } = action;
    try {
   const response = yield call(getLocation,payload.key || payload.locationKey)
    yield put (
      getLocationKeySuccess(
      response.data[0]
      ));

  }catch(error){
    yield put(
      getLocationKeyError(
      error
      )
    )};
}


export function* getDailyWeatherSaga(action: GetDailyWeatherSuccess):Generator<
| CallEffect<AxiosResponse<DailyWeather>>
| PutEffect<GetDailyWeatherSuccess>
| PutEffect<GetDailyWeatherError>,
void,
any> {
  const {payload} = action;
  try {
   const response = yield call(getDailyWeatherData,payload.key || payload.locationKey.locationKey,payload.isMetric)
   yield put(
    getDailyWeatherSuccess(
     response
    ));

  } catch (error) {
    yield put(getDailyWeatherError(
      error
    ));
  }
}

 export default function* sagasofDailyWeather() {
  yield takeLatest(GET_LOCATION_KEY, getLocationKeySaga);
  yield takeLatest(GET_DAILY_WEATHER, getDailyWeatherSaga);
}
