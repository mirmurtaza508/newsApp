import React  from 'react'
import loading from "./loading.gif";

export default function Spinner() {
    return (
      <div className='text-center'>
        <img src={loading} alt="" style={{height: "2rem",margin: "1rem"}} />
      </div>
    )
  }
