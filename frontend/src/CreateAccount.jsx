import React, { useState } from 'react'
import axios from "axios"
import style from "./CreateAccount.module.css"

const CreateAccount = () => {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


   const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/user/signup",
        formData,
        {
           withCredentials: true
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error.response?.data);
    }
  };


  return (
   <div className={style.main}>
      <div className={style.form}>

        <h1>Create Account</h1>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="userName"
            placeholder="Enter username"
            value={formData.userName}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Sign Up
          </button>

        </form>

      </div>
    </div>
  )
}

export default CreateAccount

