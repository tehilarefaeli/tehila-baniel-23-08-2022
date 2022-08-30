import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FavoriteButton from './FavoritesCities';
import img2 from '../../assets/img2.png';


const useStyles = makeStyles({
  card: {
    width: '100%',
    backgroundColor: 'white',
    color: '#242940',
  },
  media: {
    height: '50%',
  },
  currentCondition: {
    marginTop: '100px',
  },
});

export default function CurrentLocationConditions({
  selectedLocation,
  currentConditions,
  isMetric,
}:any) {
  const classes = useStyles();

  // const findIcon = (iconKey:string) =>{
  //   const IconNumber= iconKey|| '6';
  //   return String( require(`../../assets/images/${IconNumber}.png`)) 
  // }
  const showFormatedData = (date:Date) => {
    let res = '';
    const currentDate = new Date(date);
    res = `${currentDate.getDate()}/${currentDate.getMonth() +
      1}, ${currentDate.getHours()}:${currentDate.getMinutes()}`;

    return res;
  };
  
  return (
    currentConditions ? (
      currentConditions && <Card className={classes.card}>
        <CardHeader
          action={<FavoriteButton selectedLocation={selectedLocation} />}

          title={
            <Typography
              gutterBottom
              variant="h3"
              component="h2"
              color="inherit"
            >
                 {selectedLocation?.name || selectedLocation.locationName}
              <Typography variant="body2">
                {showFormatedData(currentConditions.LocalObservationDateTime)}
              </Typography>
            </Typography>
          }
        />
                    
        <br />
        <br />
        <CardContent>
          <Typography
            color="textSecondary"
            variant="body1"
            className={classes.currentCondition}
          >
            
            <img
            src={img2}
              alt="current icon"
              style={{ verticalAlign: 'middle' }}
              className="weatherIcon"
            />
            {`${currentConditions.WeatherText}`}
          </Typography>
          <Typography variant="h1" component="h1" display="inline">
            
            {isMetric? currentConditions.Temperature?.Metric?.Value
              : currentConditions.Temperature.Imperial.Value}
          </Typography>
          <Typography variant="h4" display="inline">
            {isMetric ? ' C°' : ' F°'}
          </Typography>
        </CardContent>
      </Card>
    ) :(
      <div></div>
    )
    
  );
}
