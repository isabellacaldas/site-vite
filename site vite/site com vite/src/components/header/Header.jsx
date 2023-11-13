import React, { useState } from "react"

import Head from './Head'
import "./header.css"

import { NavLink } from "react-router-dom";

function Header() {
  const [navbar, setNavbar] = useState(false)
  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
              <NavLink to='/project'>Projetos</NavLink>
              </li>
              <li>
              <NavLink to='/about'>Sobre</NavLink>
              </li>
              <li>
                <NavLink to='/board' >Diretoria</NavLink>
              </li>
            </ul>
            <button className="barIco" onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </nav>
        </div>
      </header>

    </>
  );
}

export default Header