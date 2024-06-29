import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Box, Stack } from "@mui/material";
import styles from './index.module.css';
import ProgressCard from '../Components/ProgressCard';
import Achieve from '../Components/Achieve';
import Challenge from '../Components/Challenge';
import Code from '../Components/Code';

export default function SimpleBottomNavigation(props) {
  useEffect(()=> {
    props.fetchAllTask()
    props.fetchUserTask()
  }, [])

  return (
    <Container className={styles.contain}>
      <Box className={styles.title}>Challenge Progress</Box>
      <ProgressCard />
      <Achieve />
      <Code userData={props.userData}/>
      <Challenge taskData={props.taskData}/>
    </Container>
  );
}
