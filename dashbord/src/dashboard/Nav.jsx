// import React from 'react'
// import { Link, redirect } from "react-router-dom"
// import style from "./Nav.module.css"
// import axios from 'axios'
// import api from '../api'


// const Nav = () => {


//     const logout = async () => {
//         try {    
//             await api.post("/user/logout"),
        
//              window.location.reload();
             
//             console.log("User was logged out");
//         } catch (error) {
//             console.log(error.response?.data);
//         }
//     }

//     return (
//         <div className={style.main} >
//             <div className={style.logo} >
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9VkltNjZmVQuka6kBXd0jEmQaXg6v5pcYzW8Ozhu41LQ4hMAXHEQKbL1&s=10" alt="" />
//             </div>


//             <div className={style.navLink}>
//                 <ul>
//                     <li>
//                         <Link to="/dashboard">Dashboard</Link>
//                     </li>

//                     <li>
//                         <Link to="/orders">Orders</Link>
//                     </li>

//                     <li>
//                         <Link to="/holdings">Holdings</Link>
//                     </li>

//                     <li>
//                         <Link to="/positions">Positions</Link>
//                     </li>

//                     <li>
//                         <Link to="/funds">Funds</Link>
//                     </li>
//                 </ul>
//                 <div className={style.profile}>
//                     {/* <img src="" alt="profile image" /> */}
//                     <i className="bi bi-person-circle"></i>
//                     <span onClick={logout} >username</span>
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Nav



import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import api from "../api";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = async () => {
    try {
      await api.post("/user/logout");
      window.location.reload();
      console.log("User was logged out");
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <div className={style.main}>

      {/* Logo */}
      <div className={style.logo}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9VkltNjZmVQuka6kBXd0jEmQaXg6v5pcYzW8Ozhu41LQ4hMAXHEQKbL1&s=10"
          alt="logo"
        />
      </div>

      {/* Desktop / Mobile Navigation */}
      <div
        className={`${style.navLink} ${
          menuOpen ? style.menuOpen : ""
        }`}
      >
        <ul>
          <li>
            <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/orders" onClick={() => setMenuOpen(false)}>
              Orders
            </Link>
          </li>

          <li>
            <Link to="/holdings" onClick={() => setMenuOpen(false)}>
              Holdings
            </Link>
          </li>

          <li>
            <Link to="/positions" onClick={() => setMenuOpen(false)}>
              Positions
            </Link>
          </li>

          <li>
            <Link to="/funds" onClick={() => setMenuOpen(false)}>
              Funds
            </Link>
          </li>
        </ul>

        <div className={style.profile}>
          <i className="bi bi-person-circle"></i>
          <span onClick={logout}>username</span>
        </div>
      </div>

      {/* Hamburger */}
      <button
        className={style.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className="bi bi-list"></i>
      </button>

    </div>
  );
};

export default Nav;