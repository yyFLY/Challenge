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
  const userTasks = props?.userTasks?.slice(0, 3) || []
  return (
    <>
    <Bar></Bar>
    <Container className={styles.contain}>
      <Box className={styles.title}>Challenge Progress</Box>
      {userTasks.map((o,index)=>(<div style={{paddingBottom: '15px'}}key={index}><ProgressCard data={o}/></div>))}
      <Achieve data={props.userTasks}/>
      <Code data={props.userDetail}/>
      <Challenge data={props.taskList}/>
    </Container>
    </>
  );
}
