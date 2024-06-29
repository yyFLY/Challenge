import * as React from 'react';
import { Container, Box, Stack } from "@mui/material";
import styles from './index.module.css';
import ChallengeCard from '../Components/ChallengeCard'
import { styled } from '@mui/system';


export default function Challenge() {
  const card_num = [1,2,3,4,5,6]
  return (
    <Container className={styles.contain}>
      <Box className={styles.title}>All Challenges</Box>
        <ChallengeCard styles="2" ></ChallengeCard>
        <ChallengeCard styles="2" ></ChallengeCard>
    </Container>
  )
}