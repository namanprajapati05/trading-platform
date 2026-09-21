import React, { useEffect, useState } from 'react'
import Data from "./liveData/Data"
import MainDashboard from './dashboard/MainDashboard'
import Trade from './dashboard/Trade'
import Login from './Login'
import axios from 'axios'
<<<<<<< HEAD
import api from "./api"
=======
import style from "./App.module.css"
import Nav from './dashboard/Nav'

>>>>>>> 664b09b (enhance responsive design)


const App = () => {
  
  const [tradeType, setTradeType] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);
  // const [order, setOrder] = useState(null)


  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const checkLogin = async () => {
      try {
       await api.get("/user/profile");
        setIsLogin(true);
        
      } catch (error) {
        console.log(error.response?.data);
        setIsLogin(false);
      } finally {
        setLoading(false);
      }
    };

    checkLogin();
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  const addOrder = (newOrder) => {
    setOrderArr((prev) => [...prev, newOrder]);
  };



  return (
    <div style={{ display: 'flex', minHeight: "100vh" }} >
    
    {/* check is login */}
      {!isLogin && (
        <Login setIsLogin={setIsLogin} />
      )}


      {isLogin && (
        <>
          {tradeType && (
            <Trade
              type={tradeType}
              stock={selectedStock}
              onClose={() => setTradeType(null)}
            />
          )}

         <div className={style.main_container}>
          
          <div className="phone_navbar">
            <Nav/>
          </div>

          <div className={style.Data_container}>
            <Data
              setTradeType={setTradeType}
              setSelectedStock={setSelectedStock}
            />
          </div>

          <div className={style.Dashboard_container}>
            <MainDashboard  />
          </div>

          </div>
        </>
      )}

    </div>
  )
}

export default App
