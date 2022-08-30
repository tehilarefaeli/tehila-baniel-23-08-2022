

import { GetLocationListSuccess, GetLocationList, GetLocationListError} from "./types";
import { GET_LIST_LOCATIONS_SUCCESS,GET_LIST_LOCATIONS, GET_LIST_LOCATIONS_ERROR} from "./actionTypes";

export const getLocationList = (userData:any):GetLocationList => ({
    type:GET_LIST_LOCATIONS,
    payload: userData,

});

export const getLocationListSuccess = (user:any): GetLocationListSuccess => ({
    type:GET_LIST_LOCATIONS_SUCCESS ,
    payload:user,
  });

  export const getLocationListError=(error:any):GetLocationListError=>({
    type:GET_LIST_LOCATIONS_ERROR,
    payload: error,
});