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

const UserItem = (prop) => {
  return(
    <div  className={styles.inner_container}>
    <div  className={styles.box_container}>
    <div  className={styles.fixed}>
      <Image src={girl} alt="" width={40} height={40}></Image>
    </div>
    <div  className={styles.inner_container}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <div className={styles.t3}>17 / 50 images</div>
          <div className={styles.t3}>182 days left</div>
        </Stack>

        <BorderLinearProgress
          variant="determinate"
          value={50}
          width=" 100%"
        />
    </div>
  </div>
</div>
  )
}

export default function ChallengeDetailCard(props) {

  return (
    <Box className={styles.challengerList_container}>
      <Box className={styles.title}>Challenge Details</Box>
      <div  className={styles.box_container}>
      {
        props?.data?.map((o)=>(<UserItem data={o}/>))
      }
      </div>
    </Box>
  );
}
