import React, { useState } from 'react'
import style from "./login.module.css"
import axios from 'axios'


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

            const response = await axios.post(
                "http://localhost:8000/user/login",
                loginData,
                {
                    withCredentials: true,
                }
            );

            console.log(response.data);
            setIsLogin(true)
        } catch (error) {
            console.log(error.response?.data);
        }
    };


    
// const getProfile = async () => {
//   try {
//     const response = await axios.get(
//       "http://localhost:8000/user/profile",
//       {
//         withCredentials: true,
//       }
//     );

//     console.log(response.data);
//   } catch (error) {
//     console.log(error.response?.data);
//   }
// };


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
