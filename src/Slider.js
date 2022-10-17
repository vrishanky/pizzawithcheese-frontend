import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Slider.css";
import {ApiSlides} from './ApiFolder/SliderApi';
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import { Typography, Container } from '@mui/material/';


const Slider = () => {
  // Styles
  const slideStyle = "slide flex items-center justify-center h-[100%]";
  const arrowStyle = "rounded-full bg-grey flex justify-between  items-center shadow-md hover:cursor-pointer";

  //States
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };
  return (
    <React.Fragment>

      <Typography variant="h4" component="h2" sx={{mt: 10, bgcolor:'#2a9d8f', pt:4, textAlign: 'center' }}>
          What do you get in the Itinerary
        </Typography>
    <Stack direction='row' spacing={9} sx={{bgcolor:'#2a9d8f', pt: 10, pb: 10, alignItems: 'center', fontWeight: ''}}> 
    {/* <div className="slider h-[540px] bg-white flex flex-row items-center justify-between mobile:hidden"> */}
    {/* <Grid container spacing={0}> */}
      {/* left Arrow */}
      {/* <Grid item xs={2}> */}
      <div className={arrowStyle} onClick={prevSlide}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} />
      </div>
      {/* </Grid> */}

      {/* Slide */}
      {/* <Grid item xs={8}> */}
      <div>
      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div className={`wrapper flex w-[100%] h-[540px] items-center justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative` + slide.background} key={index}>
              <div className={slideStyle}>
                <div className="flex-1 flex justify-center items-center h-[100%]">
                <img
                  className =' h-[100%] object-cover'
                  src={slide.src}
                  alt="man"
                />
                </div>
                {/* <div className="discription flex flex-col flex-1 place-items-start justify-center ml-11">
                  <h2 className="text-[55px]">{slide.content.h2}</h2>
                  <p className=" text-[30px]">{slide.content.p}</p>
                  <button className="btn">
                    Shop Now
                  </button>
                </div> */}
              </div>
            </div>
          );
        }
      })}
      </div>
      {/* </Grid> */}
      {/* Right Arrow */}
      {/* <Grid item xs={2}> */}
      <div className={arrowStyle} onClick={nextSlide}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} />
      </div>
      {/* </Grid>
      </Grid> */}
    {/* </div>   */}
    </Stack>
    </React.Fragment>   
  );
};

export default Slider;