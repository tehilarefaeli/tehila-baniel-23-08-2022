
import {SET_TENP_TYPE} from "./actionstype"
import {SetTemp} from "./types";

export const setTempType = (isMetric:any):SetTemp => ({
    type: SET_TENP_TYPE,
    payload: isMetric ,
  });