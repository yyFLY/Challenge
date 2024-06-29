import * as React from 'react';
import { Container, Box, Stack } from "@mui/material";
import styles from './index.module.css';
import ChallengeCard from '../Components/ChallengeCard'
import { styled } from '@mui/system';


export default function Challenge(props) {
  const taskList = props?.taskList || []
  return (
    <Container className={styles.contain}>
      <Box className={styles.title}>All Challenges</Box>
      {
        taskList.map((o)=>(<ChallengeCard styles="2" data={o}></ChallengeCard>))
      }
    </Container>
  )
}