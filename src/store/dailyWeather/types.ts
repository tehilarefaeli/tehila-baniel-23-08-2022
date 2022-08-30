import {GET_DAILY_WEATHER_ERROR,
  GET_DAILY_WEATHER_SUCCESS,
   GET_DAILY_WEATHER, 
   GET_LOCATION_KEY_ERROR,
   GET_LOCATION_KEY,
   GET_LOCATION_KEY_SUCCESS, 
   SET_LOCATION_KEY_SELECTED} from './actionTypes';

export interface DailyWeather {
    Headline: Headline
    DailyForecasts: DailyForecast[]
  }
  
  export interface Headline {
    EffectiveDate: string
    EffectiveEpochDate: number
    Severity: number
    Text: string
    Category: string
    EndDate: string
    EndEpochDate: number
    MobileLink: string
    Link: string
  }
  
  export interface DailyForecast {
    Date: string
    EpochDate: number
    Temperature: Temperature
    Day: Day
    Night: Night
    Sources: string[]
    MobileLink: string
    Link: string
  }
  
  export interface Temperature {
    Minimum: Minimum
    Maximum: Maximum
  }
  
  export interface Minimum {
    Value: number
    Unit: string
    UnitType: number
  }
  
  export interface Maximum {
    Value: number
    Unit: string
    UnitType: number
  }
  
  export interface Day {
    Icon: number
    IconPhrase: string
    HasPrecipitation: boolean
    PrecipitationType?: string
    PrecipitationIntensity?: string
  }
  
  export interface Night {
    Icon: number
    IconPhrase: string
    HasPrecipitation: boolean
    PrecipitationType?: string
    PrecipitationIntensity?: string
  }




  export type Location = LocationKey[]

export interface LocationKey {
  LocalObservationDateTime: string
  EpochTime: number
  WeatherText: string
  WeatherIcon: number
  HasPrecipitation: boolean
  PrecipitationType: any
  IsDayTime: boolean
  Temperature: Temperature
  MobileLink: string
  Link: string
}

export interface Temperature {
  Metric: Metric
  Imperial: Imperial
}

export interface Metric {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial {
  Value: number
  Unit: string
  UnitType: number
}

  export interface GetLocationKey {
    type: typeof GET_LOCATION_KEY;
    payload: any;
  }

  export interface SetLocationKey {
    type: typeof SET_LOCATION_KEY_SELECTED;
    payload: any;
  }

  export interface GetLocationKeySuccess {
    type: typeof GET_LOCATION_KEY_SUCCESS;
    payload: any;
  }

  export interface GetLocationKeyError {
    type: typeof GET_LOCATION_KEY_ERROR;
    payload: any;
  }
  export interface GetDailyWeather {
    type: typeof GET_DAILY_WEATHER;
    payload: any;
  }

  export interface GetDailyWeatherSuccess {
    type: typeof GET_DAILY_WEATHER_SUCCESS;
    payload: any;
  }

  export interface GetDailyWeatherError {
    type: typeof GET_DAILY_WEATHER_ERROR;
    payload: any;
  }


  export interface DailyWeatherState {
    pending: boolean;
    location: object;
    dailyWeather:any;
    locationKey: Location;
    error:string
  }

  export type DailyWeatherAction= 
  GetDailyWeatherError|
  GetDailyWeatherSuccess|
  GetDailyWeather|
  GetLocationKeyError|
  GetLocationKeySuccess|
  SetLocationKey|
  GetLocationKey;



  


  