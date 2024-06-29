import * as React from 'react';
import "./index.css";
import { Container, Box, Stack } from "@mui/material";
import girl from "../../Static/img/girl.png";

import { Image } from "mui-image";

export default function Achieve(props) {

  return (
    <Box className="achieve_container">
      <Box className='title'>Achievement &  Reward</Box>
      <Box className="achieve_container_text">
        <div className="box_container">
          <div className="fixed">
            <div className="t1">Achievement</div>
            <div className="t2">No badge earned yet</div>
          </div>
          <div className="flex-grow inner_container">
            <Image src={girl} width={50} height={50}/>
            <Image src={girl} width={50} height={50}/>
          </div>
        </div>
      </Box>
      </Box>
        );
}
