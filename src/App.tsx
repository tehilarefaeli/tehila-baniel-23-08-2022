import React from "react";
import Header from "components/Weather/Header";
import Favorites from "components/Weather/Favorites";
import { Switch, Route} from "react-router-dom";
import DailyWeather from "../src/components/Weather/DailyWeather"

export default function App(){
    return(
        <div>
        <Header/>
        
    <Switch>
        <Route path="/home">
            <DailyWeather/>
        </Route>
        <Route path="/favorite" />
            <Favorites/>
   </Switch>
   </div>
     
       
    )
}