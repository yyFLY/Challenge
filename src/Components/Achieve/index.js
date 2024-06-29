import * as React from 'react';
import { Container, Box, Stack } from "@mui/material";
import girl from "../../Static/img/girl.png";

import styles from './index.module.css';
import { Image } from "mui-image";

export default function Achieve(props) {
  if(!props.data) return <></>
  const photoURL = props?.data?.slice(0, 3).map((o)=>(`http://13.55.193.64:8080/api/resource/badge_${o.rank}.png`))

  return (
    <Box className={styles.achieve_container} >
      <Box className={styles.title} >Achievement &  Reward</Box>
      <Box className={styles.achieve_container_text} >
        <div className={styles.box_container} >
          <div className={styles.fixed} >
            <div className={styles.t1} >Achievement</div>
            <div className={styles.t2} >{photoURL.length} Badges</div>
          </div>
          <div className={styles.inner_container} >
            {
              photoURL.map((o)=>(<Image src={o} width={50} height={50}/>))
            }

          </div>
        </div>
      </Box>
      </Box>
        );
}
