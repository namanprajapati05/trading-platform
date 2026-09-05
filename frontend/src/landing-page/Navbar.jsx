import React from 'react'
import { Link } from "react-router-dom"
import style from "./Navbar.module.css"

function Navbar() {
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

               </ul>
          </div>
     </div>
     );
}

export default Navbar;