import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSetFavorites} from "../../store/favoritesCities/selectors";
import { setFavorites} from "../../store/favoritesCities/actions";
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';




const checkSavedInFavorites = (favorites:any, location:any) => {
    return Object.values(favorites).find((item:any) =>
     item.name || item.locationName === location.name || location.locationName) !== undefined
  };
  
  export default function FavoriteButton({ selectedLocation }:any) {

    const favoritesList:any = useSelector(selectSetFavorites);

    const [isFavorite, setIsFavorite] = useState(checkSavedInFavorites(favoritesList, selectedLocation));

    useEffect(() => {
      setIsFavorite(checkSavedInFavorites(favoritesList, selectedLocation));
    }, [selectedLocation, favoritesList]);
  
    const dispatch = useDispatch();

    const updateFavorites = (favorites:any) => dispatch(setFavorites(favorites));

    const handleFavorites = () => {
      let favoritesArray = [...favoritesList];
      if(!isFavorite)
         favoritesArray = favoritesArray.filter(item => item.key || item.locationKey !== selectedLocation.key || selectedLocation.locationKey);
      else
         favoritesArray.push(selectedLocation);  
      localStorage.setItem('Favorites', JSON.stringify(favoritesArray));
      updateFavorites(favoritesArray);
    }
  
    return (
      <div>
        Add to favorites
        <IconButton aria-label="favorites" onClick={handleFavorites}>
          {isFavorite ? 
            <FavoriteBorderIcon fontSize="large" htmlColor="" style={{verticalAlign:'middle'}}/> :
            <FavoriteIcon fontSize="large" htmlColor="#7DD5y6" style={{verticalAlign:'middle'}}/> 
          }
        </IconButton>
      </div>
    );
  }
  