import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from '../OpenAccount'
import Navbar from "../Navbar"
import Fotter from "../Fotter"


function HomePage() {
  return( <>
     <Hero />
     <Awards />
     <Stats />
     <Pricing />
     <Education />
     <OpenAccount />
     <Navbar/>
     <Fotter/>

  </>);
}

export default HomePage;
