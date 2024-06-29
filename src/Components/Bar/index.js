import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import styles from './index.module.css';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import girl from "../../Static/img/girl.png";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Tab(props) {

  return (

    <HideOnScroll {...props}>
     <AppBar position="fixed"  color='transparent'>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
        className={styles.top}
          >
            <Avatar alt="Remy Sharp" src={girl} />
            <h3 className={styles.title}>
                Home
            </h3> 
            <AddReactionOutlinedIcon color="secondary"/>
          </Stack>
        </Toolbar>
      </AppBar>
      </HideOnScroll>
  );
}
