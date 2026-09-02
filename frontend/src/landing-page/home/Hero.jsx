import React from "react";
import style from "./Hero.module.css"
import Button  from "../Button";

function Hero() {
  return (
    <div className={style.main} >

      <center> <div className={style.image}>
        <img src="/image/homeHero.png" alt="home page img" />
      </div>
      </center>
      <div className={style.heroText}>
        <h1>Invest in everything</h1>
        <h5>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h5>
        {/* <button>Sign up for free</button> */}
      <div className={style.button} >  <Button text="Sign up for free" path="/signup" /> </div>
      </div>

    </div>
  );
}

export default Hero;
