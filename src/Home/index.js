import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Box, Stack } from "@mui/material";
import styles from './index.module.css';
import ProgressCard from '../Components/ProgressCard';
import Achieve from '../Components/Achieve';
import Challenge from '../Components/Challenge';
import Code from '../Components/Code';
import Bar from '../Components/Bar'

export default function SimpleBottomNavigation(props) {
  useEffect(()=>{
    props.fetchTaskList()
    props.fetchUserDetail()
    props.fetchUserTask()
  }, [])
  const userTasks = props?.userTasks || []
  console.log("QQ", userTasks);
  return (
    <>
    <Bar></Bar>
    <Container className={styles.contain}>
      <Box className={styles.title}>Challenge Progress</Box>
      {userTasks.map((o)=>(<ProgressCard data={o}/>))}
      <Achieve />
      <Code data={props.userDetail}/>
      <Challenge data={props.taskList}/>
    </Container>
    </>
  );
}
