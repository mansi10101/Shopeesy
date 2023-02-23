import { Typography } from '@mui/material';
import React from 'react';
import Loader from '../assets/loading.gif';

const Loading = () => {
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
      <img style={{ height: '35vh' }} src={Loader} alt='' />
      <Typography
        sx={{
          postion: 'releative',
          fontSize: 25,
          fontFamily: 'cursive',
          fontWeight: 200,
          color: '#3c69a4',
          position: 'absolute',
          marginTop: '210px',
          zIndex: 9,
        }}
      >
        Please wait...
      </Typography>
    </div>
  );
};

export default Loading;
