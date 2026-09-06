import React, { useState } from 'react'
import style from "./Trade.module.css"
import axios from 'axios';


const Trade = ({ type, onClose, stock }) => {

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
          {status === "buy" ? <Buy stock={stock}  /> : <Sell stock={stock} />}
        </div>
      </div>
    </div>
  )
}


const Buy = ({ stock }) => {

  const [quantity, setQuantity] = useState("");
  const [orderType, setOrderType] = useState("market");
  const [price, setPrice] = useState(stock.price);

  const handleBuyOrder = async(e) => {
    e.preventDefault();

    const newOrder = {
      name: stock.name,
      qty: Number(quantity),
      price: Number(price),
      orderType: orderType,
      mode: "BUY",
    };

    // console.log(newOrder);
    // order(newOrder);


    try {
       const response = await axios.post("http://localhost:8000/order/newOrder" , newOrder , {
        withCredentials:true
       });
         console.log(response.data);

      setQuantity("");
      setOrderType("market");
      setPrice(stock.price);


    } catch (error) {
      console.log(error.response?.data || error.message);
    }

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

        <button type="submit" >
          Buy
        </button>
      </form>
    </div>
  )
}
















const Sell = ({ stock, order }) => {

  const [quantity, setQuantity] = useState("");
  const [orderType, setOrderType] = useState("market");
  const [price, setPrice] = useState(stock.price);

  const handleSellOrder = async(e) => {

    e.preventDefault();

    const newOrder = {
      name: stock.name,
      qty: Number(quantity),
      price: Number(price),
      orderType: orderType,
      mode: "SELL",
    }
    // console.log(newOrder);
    // order(newOrder);


    try {

        const response = await axios.post("http://localhost:8000/order/newOrder" , newOrder,{
          withCredentials:true
        })
       
        console.log(response);

      setQuantity("");
      setOrderType("market");
      setPrice(stock.price);

    } catch (error) {
       console.log(error.response?.data || error.message);
    }

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
          onChange={(e) => setQuantity(e.target.value)}
        />

        <select value={orderType}  onChange={(e) => setOrderType(e.target.value)} >
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

        <button type="submit">
          Sell
        </button>
      </form>
    </div>
  )
}



export default Trade
