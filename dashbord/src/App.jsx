import React, { useEffect, useState } from 'react'
import Data from "./liveData/Data"
import MainDashboard from './dashboard/MainDashboard'
import Trade from './dashboard/Trade'
import Login from './Login'
import axios from 'axios'


const App = () => {
  
  const [tradeType, setTradeType] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);
  // const [order, setOrder] = useState(null)
  const [orderArr, setOrderArr] = useState([]);

  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const checkLogin = async () => {
      try {
        await axios.get(
          "http://localhost:8000/user/profile",
          {
            withCredentials: true,
          }
        );

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

      {!isLogin && (
        <Login setIsLogin={setIsLogin} />
      )}


      {isLogin && (
        <>
          {tradeType && (
            <Trade
              type={tradeType}
              stock={selectedStock}
              order={addOrder}
              onClose={() => setTradeType(null)}
            />
          )}

          <div
            style={{
              width: "33%",
              borderRight: "1px solid gray",
            }}
          >
            <Data
              setTradeType={setTradeType}
              setSelectedStock={setSelectedStock}
            />
          </div>

          <div style={{ width: "67%" }}>
            <MainDashboard order={orderArr} />
          </div>
        </>
      )}

    </div>
  )
}

export default App
