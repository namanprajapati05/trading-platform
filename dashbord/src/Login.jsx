import React, { useState } from 'react'
import style from "./login.module.css"
import axios from 'axios'
import api from './api'


const Login = ({setIsLogin}) => {

    
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e) => {

           e.preventDefault();

        const loginData = {
            userName,
            password,
        };

        try {


            const response = await api.post("/user/login" ,  loginData ) ;

            console.log(response.data);
            setIsLogin(true)
        } catch (error) {
            console.log(error.response?.data);
        }
    };


    return (
        <div className={style.main} >

            <div className={style.form} >

                <center>

                    <img src="https://kite.zerodha.com/static/images/kite-logo.svg" alt="" />

                </center>

              <form onSubmit={handleLogin}>
                    <h1>Login to dashboard</h1>

                    <input type="text" placeholder='enter your username' onChange={(e) => setUserName(e.target.value)} />
                    <input type="password" name="" id="" placeholder='enter password' onChange={(e) => setPassword(e.target.value)} />

                    <button type='submit' > Login</button>

                </form>

            </div>

            {/* <button onClick={getProfile} > get profiel button </button> */}

        </div>
    )
}

export default Login
