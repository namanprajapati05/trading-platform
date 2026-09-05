import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import style from "./Position.module.css"

const Position = () => {

    const [positions, setPositions] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/Position/all")
            .then((res) => {
                setPositions(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <div className={style.container}>
            <h2>Positions</h2>

            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Avg</th>
                        <th>Price</th>
                        <th>Net</th>
                        <th>Day</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {positions.map((position) => (
                        
                        <tr key={position._id}>
                            <td>{position.product}</td>
                            <td>{position.name}</td>
                            <td>{position.qty}</td>
                            <td>{position.avg}</td>
                            <td>{position.price}</td>
                            <td>{position.net}</td>
                            <td>{position.day}</td>
                            <td className={position.isLoss ? "loss" : "profit"}>
                                {position.isLoss ? "Loss" : "Profit"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Position
