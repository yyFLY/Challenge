import * as React from "react";
import { Container, Box, Stack } from "@mui/material";
import styles from './index.module.css';
import { Image } from "mui-image";
import { styled } from "@mui/material/styles";
import girl from "../../Static/img/girl.png";

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

export default function ProgressCard(props) {
  if(!props.data) return <></>
  const photoURL = `http://127.0.0.1:8080/api/resource/${props.data.taskId.photo}`
  const progress = props.data?.photos?.length || 0
  console.log(props);
  return (
    <Box className={styles.progress_container}>
      <div  className={styles.box_container}>
        <div  className={styles.fixed}>
          <Image src={photoURL} alt="" width={40} height={40} borderRadius="100%"></Image>
        </div>
        <div  className={styles.inner_container}>
            <div className={styles.t1}>{props.data.taskId.taskName}</div>
            <div className={styles.t2}>Deluxe Plant Care Kit</div>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <div className={styles.t3}>{progress} / {props.data.taskId.threshold} images</div>
              <div className={styles.t3}>{props.data.taskId.leftDays} days left</div>
            </Stack>

            <BorderLinearProgress
              variant="determinate"
              value={100*progress / props.data.taskId.threshold}
              width=" 100%"
            />
        </div>
      </div>
    </Box>
  );
}
