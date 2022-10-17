import * as React from 'react';
import Container from '@mui/material/Container';
import FeaturedPost from './FeaturedPost.js';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Stack } from '@mui/material';
import { UserContext } from './UserContext'



function Features() {
  
  const { avatar, loggedIn, updateUser } = React.useContext( UserContext );

  
  return (
        <React.Fragment>
        <Typography variant="h4" marked="center" component="h2" sx={{mt: 4, pt:4, pb: 4, textAlign: 'center', textJustify: 'center' }}>
          Our Itinerary Library
        </Typography>
       <Container> 
    <Stack direction='row' spacing={6}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://res.cloudinary.com/duveai7ty/image/upload/v1665999274/2_gg141t.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            France
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        {
          loggedIn === true &&
          <Button size="small" color="primary" href='https://drive.google.com/file/d/1u1-Pgz7ZV3ZYlO0ZOMXRZjMOPsJ4Q57E/view?usp=sharing'>
          Download
        </Button>
        }
        {
          loggedIn === false &&
          <Button size="small" color="primary" href='https://drive.google.com/file/d/1u1-Pgz7ZV3ZYlO0ZOMXRZjMOPsJ4Q57E/view?usp=sharing'>
          View
        </Button>
        }
      </CardActions>


    </Card>
  
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://res.cloudinary.com/duveai7ty/image/upload/v1665999274/4_ackjj6.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Spain
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Download
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://res.cloudinary.com/duveai7ty/image/upload/v1665999274/3_arpkdf.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Germany
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Download
        </Button>
      </CardActions>
    </Card>
    </Stack>
    </Container>

    <Container >
    <Stack direction='row' spacing={6} sx={{mt: 2}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://res.cloudinary.com/duveai7ty/image/upload/v1665999274/5_hnb7jj.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Georgia
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Download
        </Button>
      </CardActions>
    </Card>
  
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://res.cloudinary.com/duveai7ty/image/upload/v1665999274/1_cc22zm.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Turkey
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Download
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://res.cloudinary.com/duveai7ty/image/upload/v1665999274/6_j47crh.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            United Arab Emirates
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Download
        </Button>
      </CardActions>
    </Card>
    </Stack>
    </Container>
                {/* <FeaturedPost post={{title:"", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", date:"", image: "https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"}}/>
                <FeaturedPost post={{title:"", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", date:"", image: "https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"}}/> */}

       
        </React.Fragment>
    )
}

export default Features;