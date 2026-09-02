import React from 'react'
import Button from './Button';

function OpenAccount() {
    return (<>
        <center style={{ padding: "4rem 5rem" }}>
            <h1 style={{ paddingBottom: "1.4rem", fontSize: "2rem" }} >Open a Zerodha account</h1>
            <p style={{ paddingBottom: "2rem", fontSize: "1.4rem", color: "gray" }} >Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Button text="Sign up for free" path="/Signup" />
        </center>
    </>);
}

export default OpenAccount;