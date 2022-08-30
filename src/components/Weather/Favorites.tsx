import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import {BASE_URL, SECRET_KEY, }from "../../store/constData";
import {selectSetFavorites} from "../../store/favoritesCities/selectors";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {selectIsMetric} from "../../store/temp/selectors";
import { useHistory } from "react-router";
import { setSelectedLocationKey} from '../../store/dailyWeather/actions';
import { messages } from '../../store/favoritesCities/errorMessage';
import img2 from '../../assets/img2.png';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '10px',
    width: '90%',
    margin: 'auto',
  },
  forecastDay: {
    filter: 'drop-shadow(0px 0px 10px #3335)',
  },
  favoritesContainer: {
    background: 'red',
  },
});


function FavoriteItem({ item, isMetric,setSelectedCity }:any) {
    const [conditions, setConditions] = useState<any>(null);  
    useEffect(() => {
       axios.get<Location>(`${BASE_URL}currentconditions/v1/${item.key || item.locationKey}?apikey=${SECRET_KEY}`)
        .then((data:any) => {
          setConditions(data.data[0]);
        })
        .catch(err => {
         alert(messages.errorApi);
        });
    }, [item.key || item.locationKey]);
    
    return (
      <Card onClick={()=>setSelectedCity(item)}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              {item.name || item.locationName}
            </Typography>
            {conditions ? (
              <div>
                <img
                  
                  src={require (`../../assets/${conditions.WeatherIcon || ''}.png`)}
                  alt="current icon"
                  style={{ verticalAlign: 'middle' }}
                  className="weatherIcon"
                />
                <br />
                <Typography variant="h4" display="inline">
                  {isMetric
                    ? conditions.Temperature.Metric.Value
                    : conditions.Temperature.Imperial.Value}
                </Typography>
                <Typography variant="h4" display="inline">
                  {isMetric ? ' C°' : ' F°'}
                </Typography>
              </div>
            ) : null}
          </CardContent>
   
      </Card>
    );
  }
  
    function Favorites() {
  
    const favorites = useSelector(selectSetFavorites);
    const isMetric = useSelector(selectIsMetric);
    const dispatch = useDispatch();
    const classes = useStyles();
    const navigate= useHistory()
    const setSelectedCity = (location: any) => {
      navigate.push('/home');
      dispatch(setSelectedLocationKey(location.key || location.locationKey,
         location.name || location.locationName));
    };

        return (
      <Grid container className={classes.root} spacing={2}>
        {(favorites).map((item:any) => (
          <Grid item sm={2} className={classes.forecastDay} key={item.key || item.locationKey}>
            <FavoriteItem
              item={item}
               isMetric={isMetric}
             setSelectedCity={setSelectedCity}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
  
  export default Favorites;
  