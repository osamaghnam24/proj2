import React from 'react'
import style from './About.module.css'

export default function About() {
  return <>
  <div className={`${style.About} text-center vh-100 d-flex align-items-center text-white `}>
         <div className="container">
          <div className="row">
            <h1 className='fs-1 fw-bold'>ABOUT COMPONENT</h1>
            <div className={`${style.star} position-relative`}>
              <span className={style.span}><i className='fa-solid fa-star'></i></span>
            </div>
            <div className="col-md-6">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML,
                 CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-6">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML,
                 CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
         </div>
    </div>  
  
  </>
}
