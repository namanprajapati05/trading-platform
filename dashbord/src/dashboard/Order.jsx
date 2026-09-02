import React, { useEffect, useState } from 'react'
import style from "./Order.module.css"

const Order = ({ order }) => {

  // const [order , serOrder] = useState({});

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

        <tbody className={style.tableBody} >
          {order.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>₹{item.price}</td>
              <td>{item.orderType}</td>
              <td className={
                item.type === "BUY"
                  ? style.buy
                  : style.sell
              } >{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Order
