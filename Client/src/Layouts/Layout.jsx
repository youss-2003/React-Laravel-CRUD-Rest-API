import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Layout() {
  return <>
  <div className="flex flex-col min-h-screen">
    <Header></Header>
  <main>
    <Outlet></Outlet>
  </main>
  <Footer></Footer>
  </div>
  
  </>
}

export default Layout