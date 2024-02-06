
import React from "react"
import { Link } from "react-router-dom"
import style from './Navbar.module.css'

export default function Navbar(){



    return<>
     <section className={`${style.nav} `}>
     <div className="container">
     <nav className="navbar navbar-expand-lg p-4 fs-4  navbar-light">
  <div className="container-fluid">
    <Link className="navbar-brand fs-2 text-white fw-bold" to={'home'}>START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 fw-bold">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'home'}></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to={'about'}>ABOUT</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active text-white" aria-current="page" to={'portfolio'}>PORTFOLIO</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active text-white" aria-current="page" to={'contact'}>CONTACT</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
     </div>
     </section>

    </>
  }