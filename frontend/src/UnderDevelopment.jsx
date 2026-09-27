import { Link } from "react-router-dom";
import styles from "./UnderDevelopment.module.css";

 
export default function UnderDevelopment() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <Illustration />

        <h1 className={styles.heading}>This page is still being built</h1>

        <p className={styles.body}>
         come back soon.
        </p>

        <Link to="/" className={styles.link}>
          Go to home
        </Link>
      </div>
    </div>
  );
}

function Illustration() {
  return (
    <svg
      className={styles.art}
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      
      <ellipse cx="120" cy="176" rx="70" ry="10" fill="#0A0D12" />

      
      <g>
        <polygon points="70,70 110,50 150,70 110,90" fill="#2A3341" />
        <polygon points="70,70 110,90 110,140 70,120" fill="#1C232E" />
        <polygon points="150,70 110,90 110,140 150,120" fill="#232C39" />
      </g>

     
      <g>
        <polygon points="90,110 140,84 190,110 140,136" fill="#3A4557" />
        <polygon points="90,110 140,136 140,178 90,152" fill="#242C39" />
        <polygon points="190,110 140,136 140,178 190,152" fill="#2C3646" />
      </g>

     
      <g transform="translate(122,58) rotate(-18)">
        <rect x="-5" y="-30" width="10" height="46" rx="4" fill="#E8A33D" />
        <circle cx="0" cy="-30" r="12" fill="none" stroke="#E8A33D" strokeWidth="7" />
        <circle cx="0" cy="18" r="8" fill="#E8A33D" />
      </g>

     
      <circle cx="55" cy="60" r="3" fill="#E8A33D" opacity="0.7" />
      <circle cx="196" cy="88" r="2.5" fill="#5B6EE8" opacity="0.6" />
      <circle cx="205" cy="140" r="3" fill="#E8A33D" opacity="0.5" />
    </svg>
  );
}