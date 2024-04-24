import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="about-container-inner">
        <h1>About</h1>
        <div className="about">
          <h3>
            This Genome Browser is a comprehensive web-based tool designed to
            visualize, analyze, and annotate genomic data. It offers an
            intuitive user interface with features such as zooming, panning, and
            searching, along with customizable visualization settings. Users can
            explore various genomic data tracks, add annotations, and perform
            basic data analysis, facilitating genomic research and analysis in
            diverse fields such as genetics, molecular biology, and
            bioinformatics
          </h3>
        </div>
        <Link className="login-btn" to={"/login"}>
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
