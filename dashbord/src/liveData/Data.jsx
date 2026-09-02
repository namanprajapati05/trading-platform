import React, { useState, useEffect } from 'react'
import style from "./Data.module.css"
import axios from "axios"

const Data = ({ setTradeType,setSelectedStock }) => {

  const [watchlist, setWatchlist] = useState([]);
  const [stock, setStock] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:8000/watchlist")
      .then((res) => {
        setWatchlist(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={style.main} >
      <header>
        <span>NIFTY50 24534</span>
        <span>SENSEX 46378</span>
      </header>

      <main>
        <div className={style.input} >
          <span><i className="bi bi-search"></i></span>
          <input type="text" placeholder='search stocks' />
        </div>

        <div className={style.container} >
          <table className={style.table} >

            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Percent</th>
              </tr>
            </thead>

            <tbody>
              {watchlist.map((stock) => (
                <tr key={stock._id} className={style.tableRow} >
                  <td>{stock.name}</td>

                  <td>₹{stock.price}</td>

                  <td className={stock.isDown ? style.loss : style.profit}>
                    {stock.percent}
                  </td>
                  <td className={style.buttons}>


                    <button className={style.buy} onClick={() => {
                      setSelectedStock({
                        name: stock.name,
                        price: stock.price
                      });
                      setTradeType("buy");
                    }}  >Buy</button>

                    <button className={style.sell} onClick={() => {
                      setTradeType("sell");
                      setSelectedStock({
                        name: stock.name,
                        price: stock.price

                      });
                    }} >Sell</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

// const Buttons = () => {
//   return (
//     <div className={style.buttonWrapeer} style={{ display: "flex", alignItems: "center", gap: "3rem" }} >
//       <button style={{  }} >buy  </button>
//       <button style={{ width: "5rem", height: "30px", backgroundColor: "red ", color: "white", border: "none", fontSize: "1.2rem" }} >sell  </button>
//     </div>
//   )
// }

export default Data
