
import * as React from 'react';
import { useHistory } from "react-router";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import TempType from './tempType';

function Header() {
    const navigate= useHistory()
   return (
     
       <AppBar position="static">
         <Toolbar>
           <Typography
             variant="h6"
             noWrap
             component="div"
           >
             Weather
           </Typography>
             <IconButton  color="inherit" 
              onClick={()=>{navigate.push('/home')}}
              >
                 <HomeIcon />
             </IconButton>
             <IconButton
               color="inherit"
              onClick={()=>{navigate.push('/favorites')}}
             >
                 <FavoriteIcon  /> 
             </IconButton>
             <TempType/>
         </Toolbar>
       </AppBar>
   );
 }
 
 export default Header;