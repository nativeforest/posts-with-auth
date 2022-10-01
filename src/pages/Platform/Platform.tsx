import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'

function Platform() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
      <Outlet />
    </main>
    <Footer />
    </>

  )
}

export {Platform}