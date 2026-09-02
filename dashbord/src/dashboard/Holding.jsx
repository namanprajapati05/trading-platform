import React, { useEffect, useState } from 'react'
import style from "./Holding.module.css"
import axios from "axios"

const Holding = () => {
    const [holding, setHolding] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/allHoldingData")
            .then((res) => {
                // console.log(res.data);
                setHolding(res.data);
            })
    }, [])

    return (
        <div className={style.main} > 
            <h1>holding (13)</h1>
            
            <table >
                <thead>
                    <tr>
                        <th>Instrument</th>
                        <th>Qty</th>
                        <th>Avg. Cost</th>
                        <th>LTP</th>
                        <th>Cur. Val</th>
                        <th>P&L</th>
                        <th>Net. Chg</th>
                        <th>Day Chg</th>
                    </tr>
                </thead>

                <tbody>
                    {holding.map((data, index) => (
                        <tr key={data._id || index} >
                            <td>{data.name}</td>
                            <td>{data.qty}</td>
                            <td>{data.avg}</td>
                            <td>{data.price}</td>
                            <td>{data.day}</td>
                            <td>{data.net}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default Holding
