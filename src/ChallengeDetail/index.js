import * as React from 'react';
import { Container, Box, Stack } from "@mui/material";
import styles from './index.module.css';
import ChallengeCard from '../Components/ChallengeCard'
import { styled } from '@mui/system';
import code from "../Static/img/code.jpeg";
import ProgressCard from '../Components/ProgressCard';
import ChallengeDetailCard from '../Components/ChallengeDetailCard';
import ChallengerList from '../Components/ChallengerList';

const BackgroundBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '240px',
  backgroundImage: `url(${code})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius:'14px'
}));

export default function ChallengeDetail() {
  const card_num = [1,2,3,4,5,6]
  return (
    <Box className={styles.contain}>
        <BackgroundBox />
        <Box className={styles.title}>Collect Diverse Plants</Box>
        <Box className={styles.lists}>
          <ProgressCard></ProgressCard>
          <ChallengeDetailCard></ChallengeDetailCard>
          <ChallengerList></ChallengerList>
        </Box>
    </Box>
  )
}