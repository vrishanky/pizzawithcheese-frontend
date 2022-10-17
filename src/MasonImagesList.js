import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Typography, Container } from '@mui/material/';

export default function MasonImagesList() {
  return (
    <Container maxWidth="sm">
    <Typography variant="h4" component="h2" sx={{mt: 5, pt: 5 ,pb: 5, textAlign:'center'  }}>
          Our Explorers & their Travels
        </Typography>
    <Box sx={{ width: 700, height: 450, overflowY: 'scroll', mb:20}}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              sx={{height: 20, width: 10}}
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </Container>
  );
}

const itemData = [
  {
    img: 'https://res.cloudinary.com/duveai7ty/image/upload/v1666002690/15_nrsrvd.png',
    title: 'Bed',
    author: 'Vrishank C',
  },
  {
    img: 'https://res.cloudinary.com/duveai7ty/image/upload/v1666002689/28_kqx7lm.png',
    title: 'Books',
    author: 'Vrishank C',
  },
  {
    img: 'https://res.cloudinary.com/duveai7ty/image/upload/v1666002690/20_pq3s3e.png',
    title: 'Sink',
    author: 'Vrishank C',
  },
  {
    img: 'https://res.cloudinary.com/duveai7ty/image/upload/v1666002689/35_nh8wig.png',
    title: 'Kitchen',
    author: 'Christian Mackie',
  },
  {
    img: 'https://res.cloudinary.com/duveai7ty/image/upload/v1666002689/26_s9eplh.png',
    title: 'Blinds',
    author: 'Darren Richardson',
  },
  {
    img: 'https://res.cloudinary.com/duveai7ty/image/upload/v1666002689/8_jyb53g.png',
    title: 'Chairs',
    author: 'Taylor Simpson',
  },
  {
    img: 'https://res.cloudinary.com/duveai7ty/image/upload/v1666002690/12_gzhvah.png',
    title: 'Laptop',
    author: 'Ben Kolde',
  },
  {
    img: 'https://res.cloudinary.com/duveai7ty/image/upload/v1666002690/13_iuqh9n.png',
    title: 'Doors',
    author: 'Philipp Berndt',
  },
  {
    img: 'https://res.cloudinary.com/duveai7ty/image/upload/v1666002689/36_enovt6.png',
    title: 'Coffee',
    author: 'Jen P.',
  },
  {
    img: 'https://res.cloudinary.com/duveai7ty/image/upload/v1666002690/25_ldk41c.png',
    title: 'Storage',
    author: 'Douglas Sheppard',
  },
  {
    img: 'https://res.cloudinary.com/duveai7ty/image/upload/v1666002689/29_tsmx7i.png',
    title: 'Candle',
    author: 'Fi Bell',
  },
  {
    img: 'https://res.cloudinary.com/duveai7ty/image/upload/v1666002689/36_enovt6.png',
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
];
