import * as React from 'react';
import { Container, Box, Stack } from "@mui/material";
import styles from './index.module.css';
import ChallengeCard from '../Components/ChallengeCard'
import { styled } from '@mui/system';

const BackgroundBox = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius:'14px'
}));

export default function Challenge() {
  const card_num = [1,2,3,4,5,6]
  return (
    <Container className={styles.contain}>
        <ChallengeCard styles="2" ></ChallengeCard>
        <ChallengeCard styles="2" ></ChallengeCard>
    </Container>
  )
}