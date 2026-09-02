import React from 'react'
import Hero from './Hero'
import Invest from './Invest'
import Steps from './Steps'
import Benifits from './Benifits'
import OpenAccount from "../OpenAccount"
import AccountType from './AccountType'

const Signup = () => {
  return (
    <div>
      <Hero/>
      <Invest/>
      <Steps/>
      <Benifits/>
      <AccountType/>
      <OpenAccount/>
    </div>
  )
}

export default Signup
