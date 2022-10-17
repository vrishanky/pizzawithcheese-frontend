import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import LocalPizzaRoundedIcon from '@mui/icons-material/LocalPizzaRounded';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import ProductHeroLayout from './ProductHeroLayout'

const backgroundImage =
  'https://res.cloudinary.com/duveai7ty/image/upload/v1666003242/CG_Banners_ehtpal.png';


function Hero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h1" marked="center">
        TRAVELLER'S LOG
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        The most important Travel Guide you will ever need. Easy and ready to use Travel Itineraries making Travel planning easy. 
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Explore 
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}
//       <React.Fragment>
//       <Box
//  sx={{
//    bgcolor: 'background.paper',
//    pt: 8,
//    pb: 6,
//  }}
// >
//  <Container maxWidth="sm">
//    <Typography
//      component="h1"
//      variant="h2"
//      align="center"
//      color="text.primary"
//      gutterBottom
//    >
//      Cheesy Travels
//    </Typography>
//    <Typography variant="h5" align="center" color="text.secondary" paragraph gutterBottom>
//      Welcome to the most important Travel Guide you will ever need. Locate & visit the best pizzerias in the whole world. 
//    </Typography>
//    <Stack
//      sx={{ pt: 4 }}
//      direction="row"
//      spacing={2}
//      justifyContent="center"
//    >
//      <Button color='secondary' variant="contained" href="./Features" startIcon={<LocalPizzaRoundedIcon/>}>Pizza Catalog</Button>
//      <Button color='success' variant="contained">All Itineraries</Button>
//    </Stack>
//  </Container>
// </Box>
// <Container sx={{ py: 8 }} maxWidth="md"></Container>   
//       </React.Fragment>
//   )
// }

export default Hero;


 