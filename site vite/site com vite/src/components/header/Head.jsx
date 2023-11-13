import React from 'react'
import logo from '../../assets/logo.png'
function Head() {
  return <>
  <section className="head">
    <div className='container flexSB paddingTB'>
        <div className="logo">
            <img src={logo} alt="logo" />        
        </div>
        <div className='marca'>
            <h1>Instituto Sumaúma (AM)</h1>
        </div>
    </div>
  </section>
  </>
}

export default Head