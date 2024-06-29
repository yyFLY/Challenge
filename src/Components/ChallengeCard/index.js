import * as React from "react";
import { Container, Box, Stack } from "@mui/material";
import styles from './index.module.css';
import { Image } from "mui-image";
import girl from "../../Static/img/girl.png";

function formatDate(d){
  const formattedDate = d.toLocaleDateString(
    'en-US', 
    { month: 'short', day: 'numeric' }
  );
  return formattedDate
}

function randomUserPhotos(){
  const rtv = []
  const filenames = ["avatar_f1.png", "avatar_f2.png", "avatar_f3.png", "avatar_m1.png", "avatar_m2.png"]
  for (let i = 0; i < filenames.length; i++) {
    if(Math.random() > 0.5){
      rtv.push(`http://127.0.0.1:8080/api/resource/${filenames[i]}`)
    }
  }
  return rtv
}

export default function Challenge(props) {
  const photoURL = `http://127.0.0.1:8080/api/resource/${props.data.photo}`
  const duration = `${formatDate(props.data.startDate)} - ${formatDate(props.data.endDate)}`
  console.log();
  return (
    <Box className={props.styles === '2' ? styles.challenge_container2 :styles.challenge_container}>
      <div className={styles.box_container}>
        <div className={styles.fixed}>
          <Image src={photoURL} alt="" width={130} height={80}></Image>
        </div>
        <div className={styles.inner_container} >
            <div className={styles.t1} >{props.data.taskName}</div>
            <div className={styles.t2} >{duration}</div>      
            <div className={styles.t3} >{props.data.participants} Participants</div>
            <div className={styles.img_container} >
              {
                randomUserPhotos()
                  .map((url)=>(<Image src={url} width={20} height={20}/>))
              }
            </div>
          </div>
      </div>
      <div className={styles.joined} >Joined</div>
    </Box>
  );
}
