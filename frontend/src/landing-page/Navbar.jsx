import React from 'react'
import { Link } from "react-router-dom"
import style from "./Navbar.module.css"
import { useNavigate } from "react-router-dom";

function Navbar() {


       const navigate = useNavigate();

       const goToTradingDashboard = ()=>{
          window.location.href = "https://tradingdashboard-ecru.vercel.app/"
       }

     return (< div className={style.main}>


          <div className={style.left}>
               <Link to="/"> <img src="/image/logo.svg" alt="logo" />
               </Link>
          </div>
          <div className={style.right}>
               <ul>
                    <Link to="/Signup" ><li>Signup</li></Link>
                    <Link to="/About" ><li>About</li></Link>
                    <Link to="/Produte" ><li>Produte</li></Link>
                    <Link to="/Pricing" ><li>Pricing</li></Link>
                    <Link to="/Support" ><li>Support</li></Link>
                    <Link to="/CreateAccount" ><li> <button > signup </button></li></Link>
                  <Link>  <li onClick={goToTradingDashboard} style={{cursor:"pointer"} } ><img src="https://kite.zerodha.com/static/images/kite-logo.svg" alt="kite logo" style={{width:"3rem"}} /></li>
                  </Link>
                    
            
               </ul>
          </div>
     </div>
     );
}

export default Navbar;