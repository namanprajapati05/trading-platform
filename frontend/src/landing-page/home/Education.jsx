import React from "react";
import style from "./Education.module.css"
import { Link } from "react-router-dom";

function Education() {
  return (
    <div className={style.main} >
      <div className={style.leftSection}>
        <img src="/image/education.svg" alt=" education sectionImage " />
      </div>
      <div className={style.rightSection}>

        <h1>Free and open market education</h1>
        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

        <Link>Varsity  <i className="bi bi-arrow-right"></i> </Link>

        <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>

        <Link>TradingQ&A <i className="bi bi-arrow-right"></i></Link>

      </div>

    </div>
  );
}

export default Education;
