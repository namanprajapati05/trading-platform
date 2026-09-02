import React from "react";
import style from "./Stats.module.css"
import { Link } from "react-router-dom";

function Stats() {


  return (
    <div className={style.main} >

      <div className={style.leftSection}>
        <h1 className={style.leftSectionHeading} >Trust with confidence</h1>
        <div>
          <h1>Customer-first always</h1>
          <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 <br /> lakh crores of equity investments, making us India’s <br /> largest broker; contributing to 15% of daily retail <br /> exchange volumes in India.</p>
        </div>

        <div>
          <h1>No spam or gimmicks</h1>
          <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
        </div>

        <div>
          <h1>The Zerodha universe</h1>
          <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
        </div>

        <div>
          <h1>Do better with money</h1>
          <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>

      </div>


      <div className={style.rightSection}>
        <img src="/image/ecosystem.png" alt="statsImage" />

        <div className={style.links}>
          <Link to="/Explore" > <p> Explore our products
           <i className="bi bi-arrow-right"></i>
          </p>

          </Link>


          <Link to="/Explore" > <p>  Explore our products

            <i className="bi bi-arrow-right"></i>

          </p>
          </Link>
        </div>

      </div>


    </div>
  );
}

export default Stats;
