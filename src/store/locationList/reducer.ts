import { GET_LIST_LOCATIONS_SUCCESS,
    GET_LIST_LOCATIONS,
   GET_LIST_LOCATIONS_ERROR} from "./actionTypes"

import {LocationListState, LocationListActions} from "./types"

 export const initialState:LocationListState  = {
    pending:false,
    locations:[],
    error:''
  };
  
const locationListReducer= (state = initialState, action: LocationListActions) => {
    switch (action.type) {
      case GET_LIST_LOCATIONS:
        return {
          ...state,
          pending: true,
        };
      case GET_LIST_LOCATIONS_SUCCESS:
        return {
          ...state,
          pending: false,
          locations:action.payload
          
        };
        case GET_LIST_LOCATIONS_ERROR:
            return {
              ...state,
              pending: false,
              error:action.payload    
            };
   
      default:
        return {
          ...state,
        };
    }
  };
  export default locationListReducer;