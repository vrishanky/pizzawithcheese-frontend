import React from 'react';
import Hero from './Hero';
import Slider from './Slider';
import Features from './Features.js';
import MasonImagesList from './MasonImagesList.js';
import HowItWorks from './HowItWorks.js';

function HomeScreen() {
    return (
        <React.Fragment>
          <Hero />
          <HowItWorks/>
          <Features />
          <Slider />
          <MasonImagesList/>
        </React.Fragment>
    )
}

export default HomeScreen;