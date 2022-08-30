
import { GET_LIST_LOCATIONS_SUCCESS,
   GET_LIST_LOCATIONS,
  GET_LIST_LOCATIONS_ERROR} from "./actionTypes"


  export type SearchData = Data[]

  export interface Data {
    Version: number
    Key: string
    Type: string
    Rank: number
    LocalizedName: string
    Country: Country
    AdministrativeArea: AdministrativeArea
  }
  
  export interface Country {
    ID: string
    LocalizedName: string
  }
  
  export interface AdministrativeArea {
    ID: string
    LocalizedName: string
  }

   export interface GetLocationListSuccess {
    type: typeof GET_LIST_LOCATIONS_SUCCESS;
    payload: any
  }
  export interface GetLocationList {
    type: typeof GET_LIST_LOCATIONS;
    payload: any;
  }

  export interface GetLocationListError {
    type: typeof GET_LIST_LOCATIONS_ERROR;
    payload: any;
    
  }

  export interface LocationListState{
    pending:boolean,
    locations:any,
    error:string
    
  }

  export type LocationListActions =
  GetLocationListSuccess | 
  GetLocationList|GetLocationListError
    