import React, { useState } from "react";
import style from "./AccountType.module.css";

// Main Component
const AccountType = () => {
  return (
    <div className={style.main}>
      <center>
        {" "}
        <h1>Explore different account types</h1>{" "}
      </center>

      <div className={style.container}>
        <AccountTypeCard
          icon={<i className="bi bi-person-circle"></i>}
          title="individual account  "
          description="Invest in equity, mutual funds and derivatives"
        />

        <AccountTypeCard
          icon={<i className="bi bi-person-circle"></i>}
          title="HUF Account  "
          description="Make tax-efficient investments for your family"
        />

        <AccountTypeCard
          icon={<i className="bi bi-person-circle"></i>}
          title="NRI Account
 "
          description="Invest in equity, mutual funds, debentures, and more"
        />

        <AccountTypeCard
          icon={<i className="bi bi-person-circle"></i>}
          title="Minor Account
 "
          description="Teach your little ones about money & invest for their future with them"
        />

        <AccountTypeCard
          icon={<i className="bi bi-person-circle"></i>}
          title="Corporate / LLP/ Partnership "
          description="Manage your business surplus and investments easily"
        />
      </div>
    </div>
  );
};

// Card Component
const AccountTypeCard = ({ icon, title, description }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: "400px",
        border: hover ? "1px solid #387ed1" : "1px solid lightgray",
        padding: "2rem",
        borderRadius: "1rem",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "2rem",
          position: "relative",
          right: "3rem",
        }}
      >
        <div style={{ fontSize: "2rem", color: "#387ed1" }}>{icon}</div>
        <h1 style={{ fontSize: "1.6rem ", marginBottom: "2rem" }}>{title}</h1>
      </div>
      <p style={{ fontSize: "1.2rem ", marginBottom: "1rem" }}>{description}</p>
    </div>
  );
};

export default AccountType;
