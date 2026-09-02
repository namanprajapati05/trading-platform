import React, {  useState } from 'react'
import Data from "./liveData/Data"
import MainDashboard from './dashboard/MainDashboard'
import Trade from './dashboard/Trade'


const App = () => {

  const [tradeType, setTradeType] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);
  // const [order, setOrder] = useState(null)
  const [orderArr, setOrderArr] = useState([]);

  const addOrder = (newOrder) => {
    setOrderArr((prev) => [...prev, newOrder]);
  };



  return (
    <div style={{ display: 'flex', minHeight: "100vh" }} >
      {tradeType && (
        <Trade
          type={tradeType}
          stock={selectedStock}
          order={addOrder}
          onClose={() => setTradeType(null)
          }
        />
      )}
      <div style={{ width: "33%", borderRight: "1px solid gray" }} >
        <Data setTradeType={setTradeType} setSelectedStock={setSelectedStock} />
      </div>
      <div style={{ width: "67%" }} >
        <MainDashboard order={orderArr} />
      </div>
    </div>
  )
}

export default App
