import React from "react";
import style from "./Dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={style.dashboard}>

            <h1 className={style.greeting}>Hi, User</h1>

            <hr />

            <h2 className={style.sectionTitle}>Equity</h2>

            <div className={style.equityCard}>

                <div className={style.mainBalance}>
                    <h1>3.47K</h1>
                    <p>Margin available</p>
                </div>

                <div className={style.details}>
                    <p>
                        <span>Margin used</span>
                        <span>0</span>
                    </p>

                    <p>
                        <span>Opening balance</span>
                        <span>3.47K</span>
                    </p>
                </div>

            </div>

            <hr />

            <div className={style.holding}>
                <h1>Holdings</h1>
                <h3>133K</h3>
            </div>

        </div>
    );
};

export default Dashboard;