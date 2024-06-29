import * as React from 'react';
import Card from '../Components/Card'

import styles from './index.module.css';
import Container from '@mui/material/Container';


export default function Media() {
  const card_num = [1,2,3,4,5,6]
  return (
    <Container>
      <div className={styles.container}>
          {
            card_num.map((_, index) => (
              <div className={styles.item}  key={index}> <Card/> </div>
              
          ))
        }
      </div>
    </Container>
  )
}