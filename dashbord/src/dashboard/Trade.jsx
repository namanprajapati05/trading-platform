import React, { useState } from 'react'
import style from "./Trade.module.css"


const Trade = ({ type, onClose, stock, order }) => {

  const [status, setStatus] = useState(type);
  return (
    <div className={style.main}>

      <div className={style.wrapper}>

        <button onClick={onClose}>X</button>

        <div className={style.head}>
          <span onClick={() => setStatus("buy")}>Buy</span>
          <span onClick={() => setStatus("sell")}>Sell</span>
        </div>

        <div className={style.body}>
          {status === "buy" ? <Buy stock={stock} order={order} /> : <Sell stock={stock} order={order} />}
        </div>
      </div>
    </div>
  )
}


const Buy = ({ stock , order }) => {


  const [quantity, setQuantity] = useState("");
  const [orderType, setOrderType] = useState("market");
  const [price, setPrice] = useState(stock.price);

  const handleBuyOrder = (e) => {
    e.preventDefault();

    const newOrder = {
      name: stock.name,
      quantity: quantity,
      orderType: orderType,
      price: price,
      type: "BUY"
    };

    console.log(newOrder);
    order(newOrder);

  };

  return (
    <div className={style.buy}>
      <h2>{stock.name} </h2>

      <form onSubmit={handleBuyOrder} >
        <input
          type="number"
          placeholder="Qty"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <select value={orderType}
          onChange={(e) => setOrderType(e.target.value)} >

          <option value="market">Market</option>
          <option value="limit">Limit</option>

        </select>

        <input
          type="number"
          placeholder="Price"
          value={price}
          readOnly={orderType === "market"}
          onChange={(e) => setPrice(e.target.value)}
        />

        {/* <select>
            <option value="CNC">CNC</option>
            <option value="MIS">MIS</option>
          </select> */}

        <button type="submit" >
          Buy
        </button>
      </form>
    </div>
  )
}


const Sell = ({ stock , order }) => {

  const [quantity, setQuantity] = useState("");
  const [orderType, setOrderType] = useState("market");
  const [price, setPrice] = useState(stock.price);

  const handleSellOrder=(e)=>{

    e.preventDefault();

    const newOrder={
       name: stock.name,
      quantity: quantity,
      orderType: orderType,
      price: price,
      type: "Sell"
    }
    console.log(newOrder);
    order(newOrder);
  }

  return (
    <div className={style.sell}>
      <h2>{stock.name}</h2>

      <form onSubmit={handleSellOrder} >
        <p>Available Qty: 20</p>

        <input
          type="number"
          placeholder="Qty"
          min="1"
          value={quantity}
          onChange={(e)=>setQuantity(e.target.value)}
        />

        <select onChange={(e)=>setOrderType(e.target.value)} >
          <option value="market">Market</option>
          <option value="limit">Limit</option>
        </select>

        <input
          type="number"
          placeholder="Price"
          value={price}
          readOnly = { orderType ==="market" } 
          onChange={(e)=>setPrice(e.target.value)}

        />

        <button type="submit">
          Sell
        </button>
      </form>
    </div>
  )
}



export default Trade
