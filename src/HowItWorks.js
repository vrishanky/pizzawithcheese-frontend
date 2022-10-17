import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
 

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 50,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const image = {
  height: 150,
  my: 4,
};


function HowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 6,
          mb: 6,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        /> */}
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 4 }}>
          How it works
        </Typography>
        <div>
          <Grid container spacing={30}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src='https://res.cloudinary.com/duveai7ty/image/upload/v1665997206/26_itu4gb.png'
                  alt="Explore Our Library"  
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Peruse our Itinerary Library
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={16} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="https://res.cloudinary.com/duveai7ty/image/upload/v1665997828/MC_Logo_Favicons_umegmd.png"
                  alt="Choose the Itinerary you like"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Register your Profile and Email with us
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src="https://res.cloudinary.com/duveai7ty/image/upload/v1665997206/28_hyx7ef.png"
                  alt="Download for Free"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Download your Itinerary for Free
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default HowItWorks;