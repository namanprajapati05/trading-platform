import React, { useEffect, useState } from 'react'
import style from "./Order.module.css"
import axios from 'axios';

const Order = () => {

   const [orders, setOrders] = useState([]);


  const api = "http://localhost:8000/order/allOrder"
 
  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios.get(api, {
          withCredentials: true,
        });

        // console.log(response.data);
        setOrders(response.data);
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };

    getOrders();
  }, []);


  return (
    <div className={style.main}>
   <h1> all orders  </h1>

      <table className={style.table} >
        <thead className={style.tableHead} >
          <tr>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Order Type</th>
            <th>Type</th>
          </tr>
        </thead>

         <tbody className={style.tableBody}>
          {orders.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>₹{item.price}</td>
              <td>{item.orderType}</td>

              <td
                className={
                  item.mode === "BUY"
                    ? style.buy
                    : style.sell
                }
              >
                {item.mode}
              </td>
            </tr>
          ))}
        </tbody>


      </table>

    </div>
  )
}

export default Order
