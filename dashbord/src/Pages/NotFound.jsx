import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import styles from './NotFound.module.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.glow} />

      <div className={styles.content}>
        <Robot />

        <h2 className={styles.heading}>Page not found</h2>

        <p className={styles.body}>
          The trade route you're looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>

        <div className={styles.actions}>
          <Link to="/" className={styles.primaryButton}>
            <Home size={18} />
            Back to Home
          </Link>

          <button onClick={() => navigate(-1)} className={styles.secondaryButton}>
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

function Robot() {
  return (
    <svg
      viewBox="0 0 220 200"
      className={styles.art}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eef1f8" />
          <stop offset="100%" stopColor="#c9d0e0" />
        </linearGradient>
        <linearGradient id="bodySideGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b7bfd4" />
          <stop offset="100%" stopColor="#9aa3bd" />
        </linearGradient>
        <linearGradient id="headGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d7dcea" />
        </linearGradient>
      </defs>

      <ellipse cx="110" cy="182" rx="52" ry="9" fill="#dfe3ec" />

      <line x1="110" y1="30" x2="110" y2="12" stroke="#c9d0e0" strokeWidth="4" strokeLinecap="round" />
      <circle cx="110" cy="9" r="6" fill="#818cf8" />

      <rect x="72" y="30" width="76" height="56" rx="18" fill="url(#headGrad)" stroke="#c3cadd" strokeWidth="2" />

      <rect x="86" y="50" width="48" height="18" rx="9" fill="#1e2433" />
      <circle cx="103" cy="59" r="4.5" fill="#818cf8" />
      <circle cx="120" cy="59" r="4.5" fill="#a78bfa" />

      <rect x="100" y="86" width="20" height="10" fill="#c3cadd" />

      <g>
        <polygon points="70,96 110,80 150,96 110,112" fill="url(#bodyGrad)" stroke="#c3cadd" strokeWidth="1.5" />
        <polygon points="70,96 110,112 110,150 70,134" fill="url(#bodySideGrad)" />
        <polygon points="150,96 110,112 110,150 150,134" fill="#a8b0c9" />
      </g>

      <circle cx="110" cy="112" r="7" fill="#ec4899" opacity="0.9" />

      <g>
        <line x1="76" y1="104" x2="60" y2="70" stroke="#b7bfd4" strokeWidth="9" strokeLinecap="round" />
        <circle cx="58" cy="64" r="7" fill="#9aa3bd" />
      </g>

      <line x1="144" y1="104" x2="156" y2="132" stroke="#b7bfd4" strokeWidth="9" strokeLinecap="round" />
      <circle cx="158" cy="136" r="7" fill="#9aa3bd" />

      <line x1="98" y1="148" x2="92" y2="176" stroke="#a8b0c9" strokeWidth="9" strokeLinecap="round" />
      <line x1="122" y1="148" x2="128" y2="176" stroke="#a8b0c9" strokeWidth="9" strokeLinecap="round" />

      <text x="150" y="46" fontSize="22" fontWeight="700" fill="#a78bfa" fontFamily="sans-serif">?</text>
    </svg>
  );
}