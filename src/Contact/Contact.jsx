import React from 'react'
import style from './Contact.module.css'

export default function Contact() {
  return <>
  <div className="container">
    <div className="text-contact text-center my-5">
        <h1 className='fw-bold mb-4'>CONATCT SECTION</h1>
        <div className={`${style.star} position-relative`}>
              <span className={style.span}><i className='fa-solid fa-star'></i></span>
            </div>

    </div>
            <div className="contact">
<div className="row">
  <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg"></label>
  <div className="col-sm-10">
    <input type="email" className="form-control form-control-lg mb-4" id="colFormLabelLg" placeholder="UserName"/>
  </div>
</div>
<div className="row">
  <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg"></label>
  <div className="col-sm-10">
    <input type="email" className="form-control form-control-lg mb-4" id="colFormLabelLg" placeholder="UserAge"/>
  </div>
</div>
<div className="row">
  <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg"></label>
  <div className="col-sm-10">
    <input type="email" className="form-control form-control-lg mb-4" id="colFormLabelLg" placeholder="UserEmail"/>
  </div>
</div>
<div className="row">
  <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg"></label>
  <div className="col-sm-10">
    <input type="email" className="form-control form-control-lg mb-3" id="colFormLabelLg" placeholder="UserPassword"/>
    <button type="button" className="btn  btn-success btn-sm mb-md-5">Send Message</button>
  </div>
 
</div>
            </div>
            
        </div>
  </>
        
  
}
