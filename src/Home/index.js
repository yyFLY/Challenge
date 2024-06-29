import * as React from 'react';
import { Container, Box, Stack } from "@mui/material";
import './index.css'
import ProgressCard from '../Components/ProgressCard';
import Achieve from '../Components/Achieve';
import Challenge from '../Components/Challenge';

export default function SimpleBottomNavigation() {
  return (
    <Container className='contain'>
      <Box className='title'>Challenge Progress</Box>
      <ProgressCard />
      <Achieve />
      <Challenge />
    </Container>
  );
}
