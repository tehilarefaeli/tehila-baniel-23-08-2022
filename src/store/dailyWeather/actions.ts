import {GET_DAILY_WEATHER_ERROR,
   GET_DAILY_WEATHER_SUCCESS,
    GET_DAILY_WEATHER,
    GET_LOCATION_KEY_SUCCESS,
    GET_LOCATION_KEY,
    GET_LOCATION_KEY_ERROR,
    SET_LOCATION_KEY_SELECTED
  
  } from './actionTypes';

import {GetDailyWeather, GetDailyWeatherSuccess, GetDailyWeatherError,
      GetLocationKey, GetLocationKeySuccess, GetLocationKeyError, SetLocationKey} from './types';

export const setSelectedLocationKey = (locationKey:any, locationName:any): SetLocationKey => ({
        type:SET_LOCATION_KEY_SELECTED ,
        payload: {locationKey, locationName},
      });

  export function getLocationKey(locationKey:any):GetLocationKey {
    return {
      type: GET_LOCATION_KEY,
      payload: locationKey
    };
  }

  export const getLocationKeySuccess = (locationKey:any):GetLocationKeySuccess=>({
    type: GET_LOCATION_KEY_SUCCESS,
    payload: locationKey 

});

export const getLocationKeyError = (locationKey:any):GetLocationKeyError=>({
  type: GET_LOCATION_KEY_ERROR,
  payload: locationKey

});


    export const getDailyWeather = (locationKey:any, isMetric:any):GetDailyWeather=>({
        type: GET_DAILY_WEATHER,
        payload: {locationKey, isMetric }

    });

    export const getDailyWeatherSuccess = (dailyWeather:any):GetDailyWeatherSuccess=>({
      type: GET_DAILY_WEATHER_SUCCESS,
      payload: dailyWeather,

  });

  export const getDailyWeatherError = (error:any):GetDailyWeatherError=>({
    type: GET_DAILY_WEATHER_ERROR,
    payload: error,

});