import React from 'react'
import Card from './Card'
import { box, confetti, wand } from '../assets';

const FeaturesSection = () => {
  return (
    <div className="features-container">
      <div className="features-inner">
        <h1>Features</h1>
        <div className="features-card">
          <Card
            icon={wand}
            title={"Zooming and Panning"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
            }
          />
          <Card
            icon={box}
            title={"Customizable Visualization Settings"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
            }
          />
          <Card
            icon={confetti}
            title={"Searching and Navigation"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection