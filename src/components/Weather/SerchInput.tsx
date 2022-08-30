import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../../scss/searchInput.css';

import { selectError, selectLocations, selectPending} from "../../store/locationList/selectors"
import { getLocationList} from "../../store/locationList/action";
import {Dispatch} from "redux";
import {GetLocationList} from "../../store/locationList/types"

function SerchInput( {onSelection}:any ) {

    const pending = useSelector(selectPending);   
    const error = useSelector(selectError);
    const dispatch:Dispatch <GetLocationList> = useDispatch();
    const getLocationsListData = (userInput:string) => dispatch(getLocationList(userInput));
    const locationsList= useSelector(selectLocations); 
  
  
  
    useEffect(() => {
      if (error.length > 0) {
       alert(error);
      }
    }, [error]);
      
    const onSearch = (event:any) => {
      const { value: input } = event.target;
      if (input !== '') {
      getLocationsListData(input);
      }
    };
  

    const onSelect = (e:any, input:string) => {
      
      if (input !== '') {
        const location = locationsList?.find(
          (locationItem:any) => input === locationItem.LocalizedName, 
        );
        
        if (location)
          onSelection({ key: location.Key ,name: location.LocalizedName });
      }
    };
         
      return (
            
      <Autocomplete
          className="country"
          id="standard-error-helper-text"
          style={{ width: 348 }}
          options={Object.values(locationsList).map((city:any) => city.LocalizedName)}
          onChange={(e, option) => {
              onSelect(e, option);
            }}
          renderInput={(params) => 
          <TextField {...params} label="Choose Country" variant="outlined"  onChange={onSearch}
          InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {pending ? (
                    
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />}
        />
      
      
   
   
  );
    }
    export default SerchInput;