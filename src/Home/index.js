import * as React from 'react';

import { Container, Box, Stack } from "@mui/material";
import './index.css'
import { Image } from 'mui-image'
import girl from "../Static/img/girl.png";
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Container className='contain'>
      <Box>Challenge Progress</Box>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={4}
      >
        <Image src={girl} alt='' width={40} height={40}></Image>
        </Stack>
    </Container>
  );
}
