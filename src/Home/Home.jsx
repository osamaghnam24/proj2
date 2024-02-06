import React from 'react'
import style from './Home.module.css'
import img from'../Assets/images/image2.svg'
import {i} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className={`${style.Home} text-center`}>
         <img src={img} alt="" width={250} className='mt-5' /> 
         <div className="prag py-5 text-white">
            <h1 className='fw-bold'>START FRAMEWORK</h1>
            <div className={`${style.star} position-relative`}>
              <span className={style.span}><i className='fa-solid fa-star'></i></span>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
         </div>
    </div>
  )
}
