import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '../Components/Card'
import styles from './index.module.css';
import Container from '@mui/material/Container';

export default function Media(props) {
  useEffect(()=> {props.fetchUserTask()}, [])
  if (!props.userData) {return <Container></Container>}

  const data = props.userData
  return (
    <Container>
      <div className='your-progress'>
        <p>taskName: {data.taskInfo.taskName}</p>
        <p>threshold: {data.taskInfo.threshold}</p>
        <p>progress: {data.userTask.photos.length}</p>
        <p>leftDays: {data.taskInfo.leftDays}</p>
      </div>
      <div className='task-details'>
        <p>StartDate:{data.taskInfo.startDate.toLocaleDateString()}</p> 
        <p>endDate:{data.taskInfo.endDate.toLocaleDateString()}</p> 
        <p>threshold: {data.taskInfo.threshold}</p>
        <p>participants: {data.taskInfo.participants}</p>
      </div>
      <div className='container3'>
          {
            data.joinData.map((data, index) => (
              <div className="item"> <Card/> </div>
          ))
        }
      </div>
    </Container>
  )
}