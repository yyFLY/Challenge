import * as React from "react";
import { Container, Box, Stack } from "@mui/material";
import styles from './index.module.css';
import { Image } from "mui-image";
import { styled } from "@mui/material/styles";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#8EFF83" : "#DBDBDB",
  },
}));

export default function ChallengeDetailCard(props) {
  console.log("props", props);
  return (
    <Box className={styles.progress_container}>
      <Box className={styles.title}>Challenge Details</Box>
      <div  className={styles.box_container}>
        <div  className={styles.inner_container}>
          <div className={styles.t1}><CalendarMonthIcon /> <div className={styles.t2}>May 31 - Dec 31</div></div>
          <div className={styles.t1}><CrisisAlertIcon />  <div className={styles.t2}>{props?.data?.taskId?.threshold} images of different plants</div></div>
          <div className={styles.t1}><Diversity1Icon />  <div className={styles.t2}>{props?.data?.taskId?.participants} participants</div></div>
          
        </div>
        <div className={styles.t3}>
        {props?.data?.taskId?.description} 
        </div>
      </div>
    </Box>
  );
}
