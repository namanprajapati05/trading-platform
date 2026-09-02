import React from 'react'
import style from "./Benifits.module.css"


const Benifits = () => {
  return (
    <div className={style.main} >
       <div className={style.leftSection} >
        <img src="/image/acop-benefits.svg" alt=" benifit sectionImage" />
        <h1>Benefits of opening a Zerodha demat account</h1>
       </div>
     
      <div className={style.rightSection} > 
        <h1>Unbeatable pricing</h1>
        <p>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
        
        <h1>Best investing experience</h1>
        <p>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
        
        <h1>No spam or gimmicks</h1>
        <p>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>

         <h1>The Zerodha universe</h1> 
         <p>More than just an app — gain free access to the entire ecosystem of our partner products.</p>     

      </div>

    </div>
  )
}

export default Benifits
