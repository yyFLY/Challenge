import * as React from 'react';
import Card from '../Components/Card'
import "./index.css";


export default function Media() {
  const card_num = [1,2,3,4,5,6]
  return (
    <div className='container'>
        {
          card_num.map((_, index) => (
            <div className="item"  key={index}> <Card/> </div>
            
        ))
      }
    </div>
  )
}