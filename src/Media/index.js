import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '../Components/Card'
import styles from './index.module.css';
import Box from '@mui/material/Box';
export default function Media(props) {
  const data = [{
    date:'June 14, 2024',
    title:'Anxious and uncertain',
    expressition: 'Feeling joyous today; everything seems brighter and more beautiful. Happiness fills my heart with warmth and light.',
    avatar:'Z',
    url:'https://images.unsplash.com/photo-1719416570332-cffacedcfe77?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D'
  },
  {
    date:'June 4, 2024',
    title:'Feeling joyful and bright',
    expressition: 'An overwhelming sense of calm envelops me. Serenity and peace pervade my thoughts, making every moment blissful.',
    avatar:'R',
    url:'https://images.unsplash.com/photo-1719403347952-188dbc72d848?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D'
  },
  {
    date:'June 2, 2024',
    title:'Calm and serene inside',
    expressition: 'A wave of sadness washes over me, leaving me pensive. Emotions run deep, and tears brim at the surface.',
    avatar:'W',
    url:'https://images.unsplash.com/photo-1718976142371-0439eabdc1cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNXxGem8zenVPSE42d3x8ZW58MHx8fHx8'
  },
  {
    date:'May 1, 2024',
    title:'Deeply sad and pensive',
    expressition: 'Excitement pulses through my veins; anticipation of new adventures fills my spirit with boundless energy and hope.',
    avatar:'X',
    url:'https://images.unsplash.com/photo-1717674503351-0f4db9cc1109?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2OXxGem8zenVPSE42d3x8ZW58MHx8fHx8'
  },
  {
    date:'May 1, 2024',
    title:'Excited and full of hope',
    expressition: 'A lingering sense of anxiety shadows my day. Uncertainty and worry intertwine, making it hard to find peace.',
    avatar:'A',
    url:'https://images.unsplash.com/photo-1496497243327-9dccd845c35f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwN3xGem8zenVPSE42d3x8ZW58MHx8fHx8'
  },
]
  return (
      <div className={styles.container}>
          {
            data.map((data, index) => (
              <div className={styles.item}> <Card data = {data}/> </div>
          ))
        }
      </div>
  )
}