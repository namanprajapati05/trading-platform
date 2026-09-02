import React from "react";
import style from "./Pricing.module.css"
import { Link } from "react-router-dom"

function Pricing() {
  return (
    <div className={style.main}>
      <div className={style.leftSection}>
        <h1>
          Unbeatable pricing
        </h1>

        <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>

        <Link to="/Pricing">See pricing <i className="bi bi-arrow-right"></i></Link>

      </div>
      <div className={style.rightSection}>
        <div className={style.pricingSection}>
          <img src="/image/pricing0.svg" alt="PricingImage1" /> <div> Free account <br />
            opening</div>
        </div>

        <div className={style.pricingSection}>
          <img src="/image/pricingEquity.svg" alt="PricingImage2" />
          <div>
            Free equity delivery <br />
            and direct mutual funds
          </div>

        </div>

        <div className={style.pricingSection} >
          <img src="/image/other-trades.svg" alt="PricingImage3" />
          <div>  Intraday and <br />F&O</div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
