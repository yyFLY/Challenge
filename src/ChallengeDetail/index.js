import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Box, Stack } from "@mui/material";
import styles from './index.module.css';
import ChallengeCard from '../Components/ChallengeCard'
import { styled } from '@mui/system';
import code from "../Static/img/code.jpeg";
import ProgressCard from '../Components/ProgressCard';
import ChallengeDetailCard from '../Components/ChallengeDetailCard';
import ChallengerList from '../Components/ChallengerList';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Padding } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const BackgroundBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '240px',
  backgroundImage: `url({http://127.0.0.1:8080/api/resource/${Box}})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius:'14px'
}));

export default function ChallengeDetail(props) {
  const location = useLocation()
  const taskId = location.taskId
  useEffect(()=>{
    props.fetchTaskDetail(taskId)
    props.fetchTaskParticipants(taskId)
  }, [])
  console.log("taskDetail", props.taskDetail);
  // 
  // taskParticipants
  const card_num = [1,2,3,4,5,6]
  return (
    <Box className={styles.contain}>
        <BackgroundBox data={props?.taskDetail?.photo}/>
        <Box className={styles.title}>{props?.taskDetail?.taskName}</Box>
        <Box className={styles.lists}>
          <ProgressCard></ProgressCard>
          <ChallengeDetailCard></ChallengeDetailCard>
          <ChallengerList></ChallengerList>
        </Box>
        <Button
        style={{marginTop:40, with:'100%'}}
          variant="contained"
          size="large"
          color="secondary"
          component="label"
          role={undefined}
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput type="file" />
    </Button>
    </Box>
  )
}