import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

// function Copyright() {
//   return (
//     <React.Fragment>
//       {'© '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//     </React.Fragment>
//   );
// }

const iconStyle = {
  width: 48,
  height: 48,
  display: 'contained',
  justifyContent: 'center',
  alignItems: 'center',
  mr: 1,
};

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

export default function Footer() {
  return (
    <React.Fragment>
    <Box
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.main' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 5 }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Box component="a" href="www.facebook.com/" sx={iconStyle}>
                  <img
                    src="https://res.cloudinary.com/duveai7ty/image/upload/v1666000786/30_i6h6d9.png"
                    alt="Facebook"
                  />
                </Box>
                <Box component="a" href="www.youtube.com" sx={iconStyle}>
                  <img
                    src="https://res.cloudinary.com/duveai7ty/image/upload/v1666000786/31_ak4thh.png"
                    alt="Youtube"
                  />
                </Box>
                <Box component="a" href="www.instagram.com" sx={iconStyle}>
                  <img
                    src="https://res.cloudinary.com/duveai7ty/image/upload/v1666000786/32_xukczm.png"
                    alt="Instagram"
                  />
                </Box>
              </Grid>
              <Grid item>
              
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Our Itineraries
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Stack direction='column'> 
                <Link href="/premium-themes/onepirate/terms/">France</Link>
                <Link href="/premium-themes/onepirate/privacy/">Spain</Link>
                <Link href="/premium-themes/onepirate/terms/">Germany</Link>
                <Link href="/premium-themes/onepirate/terms/">Turkey</Link>
                <Link href="/premium-themes/onepirate/terms/">Georgia</Link>
                <Link href="/premium-themes/onepirate/terms/">United Arab Emirates</Link>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            {/* <Typography variant="caption">
              {'Icons made by '}
              <Link href="https://www.freepik.com" rel="sponsored" title="Freepik">
                Freepik
              </Link>
              {' from '}
              <Link href="https://www.flaticon.com" rel="sponsored" title="Flaticon">
                www.flaticon.com
              </Link>
              {' is licensed by '}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography> */}
          </Grid>
        </Grid>
        
      </Container>
      <Typography variant="p" marked="center" gutterBottom>
     Copyright 2022 Pizza with Cheese
   </Typography>
    </Box>

     
   </React.Fragment>
  );
}