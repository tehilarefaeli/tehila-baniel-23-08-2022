
import axios,{AxiosResponse} from "axios";
import { all, call, put, takeLatest, PutEffect, CallEffect } from "redux-saga/effects";
import { getLocationListError,getLocationListSuccess } from "./action";

import {BASE_URL, SECRET_KEY, }from "../constData"
import{ SearchData, GetLocationListSuccess, GetLocationListError} from "./types"
import { GET_LIST_LOCATIONS} from "./actionTypes";

const getData = (payload:any) => 
  axios.get<SearchData>(`${BASE_URL}locations/v1/cities/autocomplete?apikey=${SECRET_KEY}&q=${payload}&language=en-us`)

function* getLocationSearch( action:GetLocationListSuccess):Generator<
| CallEffect<AxiosResponse<SearchData>>
| PutEffect<GetLocationListSuccess>
| PutEffect<GetLocationListError>,
void,
any> {
  const {payload} = action;
  try {
    const response = yield call(getData,payload)
    yield put(
      getLocationListSuccess(
         response.data
     ));
 
   } catch (error) {
     yield put(getLocationListError(
       error
     ));
   }

}
function* locationsSearch() {
  yield all([takeLatest(GET_LIST_LOCATIONS, getLocationSearch)]);
}

export default locationsSearch;
