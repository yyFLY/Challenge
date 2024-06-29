import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '../Components/Card'
import styles from './index.module.css';
import Container from '@mui/material/Container';

export default function Media(props) {
  const nums = [1,2,3,4,5]

  return (
    <Container>
      <div className='container3'>
          {
            nums.map((_, index) => (
              <div className="item"> <Card/> </div>
          ))
        }
      </div>
    </Container>
  )
}