import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import './Platform.css'
function Platform() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main className='platform-wrapper'>
      <Outlet />
    </main>
    <Footer />
    </>

  )
}

export {Platform}