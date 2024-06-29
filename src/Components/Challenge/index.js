import * as React from 'react';
import "./index.css";
import { Container, Box, Stack } from "@mui/material";
import ChallengeCard from '../ChallengeCard'

export default function Challenge(props) {

  return (
    <Box className="achieve_container">
      <Box className='title'>Challenges</Box>
      <Box className="top_text">
        <div className='t1'>Invite your friends</div>
        <div className='t2'>Explore the fun challenge with your friend and get rewarded</div>

      <ChallengeCard />
      <ChallengeCard />
      </Box>
      </Box>
        );
}
