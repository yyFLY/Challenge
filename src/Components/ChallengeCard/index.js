import * as React from "react";
import { Container, Box, Stack } from "@mui/material";
import styles from './index.module.css';
import { Image } from "mui-image";
import { styled } from "@mui/material/styles";
import girl from "../../Static/img/girl.png";


export default function Challenge(props) {
  return (
    <Box className={styles.challenge_container}>
      <div className={styles.box_container}>
        <div className={styles.fixed}>
          <Image src={girl} alt="" width={130} height={80}></Image>
        </div>
        <div className={styles.inner_container} >
            <div className={styles.t1} >41 Madison Ave, New</div>
            <div className={styles.t2} >Jan 01 - May 31</div>      
            <div className={styles.t3} >104 plant enthusiasts</div>
            <div className={styles.img_container} >
              <Image src={girl} width={20} height={20}/>
              <Image src={girl} width={20} height={20}/>
            </div>
          </div>
      </div>
      <div className={styles.joined} >joined</div>
    </Box>
  );
}
