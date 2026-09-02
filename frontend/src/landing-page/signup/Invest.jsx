import React from 'react'
import style from "./Invest.module.css"
import Button from '../Button'

  const InvestCard = ({ img, heading, subheading }) => {
  return (
    <div style={{ display: "flex", flexWrap:"wrap",  gap: "2rem", alignItems: "center"  , padding:"2rem"}}> 

      <img src={process.env.PUBLIC_URL + img} alt={heading} style={{width:"8rem"}} />

      <div style={{display:"flex" , flexWrap:"wrap" , flexDirection:"column" }} >  
        <h3 style={{fontSize:"2rem" , color:"gray" }}>{heading}</h3>
        <p style={{fontSize:"1.2rem" , color:"gray" }} >{subheading}</p>
      </div>

    </div>
  );
};



const Invest = () => {

  return (
    <div className={style.main} >
      <h1>Investment options with Zerodha demat account</h1>

      <div className={style.cardContainer} >

        <InvestCard img="/image/stocks-acop.svg" heading="Stocks" subheading="Invest in all exchange-listed securities" />
        <InvestCard img="/image/mf-acop.svg" heading="Mutual Funds" subheading="Direct mutual funds with zero commission" />
        <InvestCard img="/image/ipo-acop.svg" heading="IPOs" subheading="Apply online and invest in initial public offerings" />
        <InvestCard img="/image/fo-acop.svg" heading="Futures & Options" subheading="Hedge and trade with leverage" />
      </div>
    <center>  <Button text="Explore Investments" path="investment" /> </center>
    </div>
  )
}



export default Invest
