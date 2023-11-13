import React from 'react'
import { BiLogoInstagram, BiLogoFacebookCircle, BiLogoGmail, BiPhone } from "react-icons/bi";
import './footer.css'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="box logo">
                {/*<img src="" alt="" />*/}
                <p> Instituto Sumauma</p>
                <br />
                <ul>
                  <li>
                    <BiLogoGmail />
                  </li>
                  <li> 
                    <BiPhone/> 
                  </li>
                  <li>
                    <BiLogoInstagram />
                  </li>
                  <li>
                    <BiLogoFacebookCircle />
                  </li>
                </ul>
                
            </div>
        </div>
    </footer>
    <div className="legal">
        <p>make with <i className='fa fa-heart'></i> by Icaro  &copy; 2023</p>
    </div>
    </>
  )
}

export default Footer