import React from 'react'
import { Link } from "react-router-dom"
import style from "./Nav.module.css"

const Nav = () => {
    return (
        <div className={style.main} >
            <div className={style.logo} >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9VkltNjZmVQuka6kBXd0jEmQaXg6v5pcYzW8Ozhu41LQ4hMAXHEQKbL1&s=10" alt="" />
            </div>
            <div className={style.navLink}>
                <ul>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>

                    <li>
                        <Link to="/orders">Orders</Link>
                    </li>

                    <li>
                        <Link to="/holdings">Holdings</Link>
                    </li>

                    <li>
                        <Link to="/positions">Positions</Link>
                    </li>

                    <li>
                        <Link to="/funds">Funds</Link>
                    </li>
                </ul>
                <div className={style.profile}>
                    {/* <img src="" alt="profile image" /> */}
                    <i className="bi bi-person-circle"></i>
                    <span>username</span>
                </div>

            </div>

        </div>
    )
}

export default Nav
