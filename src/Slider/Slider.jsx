import React from 'react'
import style from './Slider.module.css'

export default function Slider() {
  return <>
    <section className={`${style.slid} text-white p-5`}>
    <div className="container">
        <div className="row text-center p-5 ">
          <div className="col-md-4 " >
          <h1 className='fs-3'>LOCATION</h1>
          <p >2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 " >
          <h1 className='fs-3'>AROUND THE WEB</h1>
          <div className="brand-icon d-flex align-items-center justify-content-center">
                    <div className={`${style.icon} me-3`}>
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                    <div className={`${style.icon} me-3`}>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div className={`${style.icon} me-3`}>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className={`${style.icon} me-3`}>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
          </div>
          <div className="col-md-4 " >
          <h1 className='fs-3'>ABOUT FREELANCER</h1>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          
          </div>
        </div>
        </div>
    </section>
  </>
}
