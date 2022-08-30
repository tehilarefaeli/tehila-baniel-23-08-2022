
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import {selectIsMetric } from "../../store/temp/selectors";
import {setTempType} from "../../store/temp/action";
import {ICONS} from "./icon";

const useStyles = makeStyles({
  icon: {
    verticalAlign: 'middle',
  },
  switch: {
    display: 'flex',
    alignItems: 'center',
  },
});

function TempType() {

  const isMetric = useSelector(selectIsMetric);
  const dispatch = useDispatch();
  const classes = useStyles();

  const setTempUnits = (e:any) => {
    dispatch(setTempType(e.target.checked));
  };

  return (
    <div className={classes.switch}>
      <svg
        version="1.1" viewBox="0 0 30 30"  width="50px" height="50px" className={classes.icon} 
          style={{ fill: 'white', opacity: `${isMetric ? 0.2 : 1}` }}>
        <path d={ICONS.F}/>
      </svg>
      <Switch
        defaultChecked={isMetric}
        onChange={setTempUnits}
        value="checkedF"
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      ></Switch>
      <svg
        version="1.1" viewBox="0 0 30 30"  width="50px" height="50px" className={classes.icon} 
        style={{fill: 'white', opacity: `${isMetric ? 1 :0.2}`}}
      >
        <path d={ICONS.C}/>
      </svg>
    </div>
  );
}

export default TempType;
