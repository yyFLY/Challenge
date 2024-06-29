import * as React from 'react';
import { Container, Box, Stack } from "@mui/material";
import girl from "../../Static/img/girl.png";

import styles from './index.module.css';
import { Image } from "mui-image";

export default function Achieve(props) {

  return (
    <Box className={styles.achieve_container} >
      <Box className={styles.title} >Achievement &  Reward</Box>
      <Box className={styles.achieve_container_text} >
        <div className={styles.box_container} >
          <div className={styles.fixed} >
            <div className={styles.t1} >Achievement</div>
            <div className={styles.t2} >No badge earned yet</div>
          </div>
          <div className={styles.inner_container} >
            <Image src={girl} width={50} height={50}/>
            <Image src={girl} width={50} height={50}/>
          </div>
        </div>
      </Box>
      </Box>
        );
}
