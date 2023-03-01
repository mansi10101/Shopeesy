import { Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import Loader from '../assets/loading.gif';

const Loading = () => {
  const isMobile = useMediaQuery("(max-width: 450px")
  return (
    <div
      style={{
        display: 'grid',
        width: '100vw',
        height: '100vh',
        margin: 0,
        justifyItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
      }}
    >
      <img style={{ height: isMobile? "17vh" : '27vh' }} src={Loader} alt='' />
      <Typography
        sx={{
          postion: 'releative',
          fontSize: 15,
          fontFamily: 'Geneva, Verdana, sans-serif',
          fontWeight: 200,
          color: '#3c69a4',
          position: 'absolute',
          marginTop: isMobile? "130px" : '150px',
          zIndex: 9,
        }}
      >
        Please wait...
      </Typography>
    </div>
  );
};

export default Loading;
