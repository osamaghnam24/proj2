import React from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"
import Slider from "../Slider/Slider"
import Home from "../Home/Home"


export default function Layout(){



    return<>
    <Navbar/>
    <Outlet></Outlet> 
    <Slider/>
    <Footer/>
    
    </>
  }