import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FaceIcon from '@mui/icons-material/Face';
import PetsIcon from '@mui/icons-material/Pets';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';
import {Link,useNavigate} from "react-router-dom"


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const navigation=useNavigate()

  return (
    <Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
                console.log(newValue)
                if (newValue == 0) {
                  navigation('/');
                }
                else if (newValue == 1) {
                  navigation('/challenge');
                }
                else if (newValue == 2) {
                  navigation('/media');
                }
            }}
        >
            <BottomNavigationAction label="Dashboard" icon={<FaceIcon />} />
            <BottomNavigationAction label="Challenge" icon={<PetsIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
