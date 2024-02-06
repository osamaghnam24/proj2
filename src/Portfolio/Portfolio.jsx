import React from 'react'
import img from '../Assets/images/image3.png'
import imge from '../Assets/images/image2.png'
import imgo from '../Assets/images/image4.png'
import style from'./Portfolio.module.css'


export default function Portfolio() {
  return <>
  <div className="container">
  <div className="port text-center my-4">
    <h1 className='fw-bold'>PORTFOLIO COMPONENT</h1>
    <div className={`${style.star} position-relative`}>
              <span className={style.span}><i className='fa-solid fa-star'></i></span>
            </div>
  </div>
  <div className="row">
    <div className="col-md-4">
        <div className={`${style.img} position-relative`}>
            <img src={img} width={400} alt="" className='rounded-2' />
            <div className={`${style.linier} position-absolute rounded-2`}>
            <i className="fa-solid fa-plus text-white"></i>
            </div>
        </div>
     </div>
    <div className="col-md-4">
    <div className={`${style.imge} position-relative`}>
            <img src={imge} width={400} alt="" className='rounded-2' />
            <div className={`${style.linier} position-absolute rounded-2`}>
            <i className="fa-solid fa-plus text-white"></i>
            </div>
        </div>
    </div>
    <div className="col-md-4">
    <div className={`${style.imge} position-relative`}>
            <img src={imgo} width={400} alt="" className='rounded-2' />
            <div className={`${style.linier} position-absolute rounded-2`}>
            <i className="fa-solid fa-plus text-white"></i>
            </div>
        </div>
    </div>
  </div>
  <div className="row my-5">
    <div className="col-md-4">
    <div className={`${style.imge} position-relative`}>
            <img src={img} width={400} alt="" className='rounded-2' />
            <div className={`${style.linier} position-absolute rounded-2`}>
            <i className="fa-solid fa-plus text-white"></i>
            </div>
        </div>
    </div>
    <div className="col-md-4">
    <div className={`${style.imgo} position-relative`}>
            <img src={img} width={400} alt="" className='rounded-2' />
            <div className={`${style.linier} position-absolute rounded-2`}>
            <i className="fa-solid fa-plus text-white"></i>
            </div>
        </div>
    </div>
    <div className="col-md-4">
    <div className={`${style.imge} position-relative`}>
            <img src={img} width={400} alt="" className='rounded-2' />
            <div className={`${style.linier} position-absolute rounded-2`}>
            <i className="fa-solid fa-plus text-white"></i>
            </div>
        </div>
    </div>
  </div>
  </div>

  </>
}
