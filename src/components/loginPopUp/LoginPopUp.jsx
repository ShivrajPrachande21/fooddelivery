import React, { useState } from 'react'
import './loginPopUp.css'
import { assets } from '../../assets/assets'
const LoginPopUp = ({setShowLogin}) => {
  const [CurrectState,setCurrentState]=useState('Login')
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
        <h2>{CurrectState}</h2>
        <img onClick={()=>setShowLogin(prev=>!prev)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {CurrectState==="Login"?<></>:       
           <input type="text" placeholder='Your name' required/>}
  
          <input type="email" placeholder='You email' required />
          <input type="password" placeholder='Password'  required/>
        </div>
        <button>{CurrectState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {CurrectState=='Login'?   <p>Create a new account? <span onClick={()=>setCurrentState( 'Sign Up')}>Click here</span></p>: <p>Already have an account? <span onClick={()=>setCurrentState( 'Login')}>Login</span></p>}
     
       
      </form>
    </div>
  )
}

export default LoginPopUp