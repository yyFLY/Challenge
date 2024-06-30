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
import { useParams } from 'react-router-dom';
import { Snackbar, Alert } from '@mui/material';

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

const BackgroundBox = styled(Box)(({ theme,imageUrl  }) => ({
  width: '100%',
  height: '240px',
  backgroundImage: `url(http://127.0.0.1:8080/api/resource/${imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius:'14px'
}));


export default function ChallengeDetail(props) {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const onChange = (e) => {
    const value = e.target.value.length
    if(value) {
      setValue(value)
      handleClick()

    }
    console.log(e)
  }

  const {taskId} = useParams()
  useEffect(()=>{
    props.fetchTaskDetail(taskId)
    props.fetchTaskParticipants(taskId)
  }, [])
  if (!props?.taskDetail) return <></>
  const card_num = [1,2,3,4,5,6]

  return (
    <Box className={styles.contain}>
           <Snackbar style={{top:10,bottom:'auto'}} open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Your have selected {value} file(s) !
            </Alert>
          </Snackbar>
        <BackgroundBox imageUrl={props?.taskDetail?.taskId?.photo}/>
        <Box className={styles.title}>{props?.taskDetail?.taskId?.taskName}</Box>
        <Box className={styles.lists}>
          <ProgressCard data={props?.taskDetail}></ProgressCard>
          <ChallengeDetailCard data={props?.taskDetail}></ChallengeDetailCard>
          <ChallengerList data={props?.taskParticipants}></ChallengerList>
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
          <VisuallyHiddenInput type="file" onChange={onChange}/>
    </Button>
    </Box>
  )
}