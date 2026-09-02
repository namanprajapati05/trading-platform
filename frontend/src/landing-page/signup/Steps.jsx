import React from 'react'
import style from "./Step.module.css"

const Steps = () => {
  return (
    <div className={style.main} >
      <h1>Steps to open a demat account with Zerodha</h1>
      <div className={style.coverDiv} >
        <div>
          <img src="\image\steps-acop.svg" alt="" />
        </div>
        <div className={style.stpes}>
          <i className="bi bi-1-circle"></i> Enter the requested details
          <hr  />
          <i className="bi bi-2-circle"></i> Complete e-sign & verification
          <hr />
          <i className="bi bi-3-circle"></i>Start investing!
        </div>
      </div>
    </div>
  )
}

export default Steps
