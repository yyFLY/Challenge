import * as React from 'react';
import styles from './index.module.css';
import { Container, Box, Stack } from "@mui/material";
import ChallengeCard from '../ChallengeCard'

export default function Challenge(props) {

  return (
    <Box className={styles.achieve_container}>
      <Box className={styles.title}>Challenges</Box>
      <Box className={styles.top_text}>
        <div className={styles.t1}>Invite your friends</div>
        <div className={styles.t2}>Explore the fun challenge with your friend and get rewarded</div>

      <ChallengeCard />
      <ChallengeCard />
      </Box>
      </Box>
        );
}
