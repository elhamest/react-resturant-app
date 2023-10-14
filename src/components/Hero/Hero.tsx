import React from "react";
import backgroundImage from "../../assets/b1.jpg";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes["hero-text"]}>
        <h3>Serving Delightful Moments</h3>
        <h1>Aso Resturant</h1>
        <h2>رستوران آسو</h2>
        <button>View Menu</button>
      </div>
      <img
        src={backgroundImage}
        alt="Aso Resturant"
        className={classes["hero-background"]}
      />
    </div>
  );
};

export default Hero;
