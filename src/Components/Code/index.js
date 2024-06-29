import * as React from 'react';
import { Container, Box, Stack } from "@mui/material";
import code from "../../Static/img/code.jpeg";

import styles from './index.module.css';
import { styled } from '@mui/system';

const BackgroundBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '128px',
  backgroundImage: `url(${code})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius:'14px'
}));

export default function Code(props) {
  const amount = props.data?.amount || 0
  return (<BackgroundBox>
    <div className={styles.t1}>
      <div className={styles.t2}>amount</div>
      ${amount}
    </div>
  </BackgroundBox>);
}
