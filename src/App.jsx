import React from "react";
import Layout from "./Layout/Layout";
import{RouterProvider, createBrowserRouter}from'react-router-dom'
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import About from "./About/About";
import NotFound from "./NotFound/NotFound";
import Home from "./Home/Home";


let routers =createBrowserRouter([{
path:'',element: <Layout/>,children:[
  {index: true,element:<Home/> },
  {path:'home',element:<Home/> },
  {path:'about',element:<About/> },
  {path:'portfolio',element:<Portfolio/> },
  {path:'contact',element:<Contact/> },
  {path:'*',element:<NotFound/> }
]
}])


export default function App(){



  return<>
  
    <RouterProvider router={routers}></RouterProvider>
  </>
}