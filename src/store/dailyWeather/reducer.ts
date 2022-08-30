import {GET_DAILY_WEATHER_ERROR,
    GET_DAILY_WEATHER_SUCCESS,
     GET_DAILY_WEATHER,
     GET_LOCATION_KEY_SUCCESS,
     GET_LOCATION_KEY,
     GET_LOCATION_KEY_ERROR,
     SET_LOCATION_KEY_SELECTED
   
   } from './actionTypes';
import{
    DailyWeatherState,
} from './types';
  export const initialState:DailyWeatherState = {
    location: { name: 'Tel Aviv', key: '215854' },
    dailyWeather:null,
    locationKey: [],
    pending: false,
    error: '',
  };
  
  const dailyWeatherReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case GET_LOCATION_KEY:
      case GET_DAILY_WEATHER:
        return {
          ...state,
          pending: true,
        };
      case GET_LOCATION_KEY_SUCCESS:
        return {
          ...state,
          pending: false,
          locationKey: action.payload,
        };
      case GET_LOCATION_KEY_ERROR:
      case GET_DAILY_WEATHER_ERROR:
        return {
          ...state,
          pending: false,
          error: action.payload,
        };
      case GET_DAILY_WEATHER_SUCCESS:
        return {
          ...state,
          pending: false,
          dailyWeather: action.payload,
        };
        case SET_LOCATION_KEY_SELECTED:
          return {
            ...state,
            location: action.payload,
          };
      default:
        return state;
    }
  };
  export default dailyWeatherReducer;