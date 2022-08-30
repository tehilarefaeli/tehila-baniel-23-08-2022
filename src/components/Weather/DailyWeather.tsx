

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectDailyWeather, selectLocationKey, selectLocation,selectPending} from "../../store/dailyWeather/selectors";
import {Dispatch} from "redux";
import {getLocationKey,setSelectedLocationKey, getDailyWeather} from "../../store/dailyWeather/actions";
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import  SerchInput  from "./SerchInput";
import CurrentLocationConditions from "./LocationKey";
import LocationDailyWeather from "./LocationDailyWeather";
import{ selectIsMetric} from "../../store/temp/selectors";
import '../../scss/searchInput.css';

function DailyWeather(){
    const location:any = useSelector(selectLocation);
    const locationKey:any = useSelector(selectLocationKey);
    const dailyWeather:any = useSelector(selectDailyWeather);
    const isMetric:any =useSelector(selectIsMetric);
    const dispatch:Dispatch<any> = useDispatch(); 
  
    useEffect(() => {
        if (location) {
          dispatch(getLocationKey(location));
          dispatch(getDailyWeather(location, isMetric));
        }
      }, [location]);

      const setSelectedCity = (location:any) => {        
        dispatch(setSelectedLocationKey(location.key || location.locationKey, location.name || location.locationName));
      }
        
      const useStyles = makeStyles(theme => ({
        root: {
          padding: '10px',
        },
        paper: {
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));
      const classes = useStyles();
      return (
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={6}>
              <SerchInput onSelection={setSelectedCity} />
            </Grid>

            { location ? (    
              <Grid item xs={12}>
                <Card>
                  <CurrentLocationConditions
                    selectedLocation={location}
                    currentConditions={locationKey}
                    isMetric={isMetric}
                  />
                  {dailyWeather && (
                    <LocationDailyWeather dailyWeather={dailyWeather} />
                  )}
                </Card>
              </Grid>
            ) : (
              ''
            )}
          </Grid>
        </div>
      );


} export default DailyWeather;