import React from 'react'
import Button from '../Button'
import style from "./Hero.module.css"

const Hero = () => {
  return (
    <div className={style.main} >
      <div className={style.heading} >
        <h1>Open a free demat and trading account online</h1>
        <h2>
          Start investing brokerage free and join a community of 1.6+ crore investors and traders</h2>
      </div>

      <div className={style.imageSection}>
        <div>
          <img src="/image/signup.png" alt="signupImage " />
        </div>
        <div  >
          <h2>Signup Now</h2>
          <h3>Or track your existing application</h3>
          <input type="number" name="" id="" placeholder='enter your mobile number' /><br />
          <Button text="Get Otp " />

          <p>By proceeding, you agree to the Zerodha terms & privacy policy</p>
          <hr />
          <p>Looking to open NRI account? Click here</p>

        </div>
      </div>


      <h1 className={style.bottomH1} >Already have a demat account?</h1>
      <p className={style.bottomP} >Move your holdings to Zerodha and we'll cover your transfer costs, up to ₹500, learn more.</p>

    </div>
  )
}

export default Hero
