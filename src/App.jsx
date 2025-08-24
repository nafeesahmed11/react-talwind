import { useState } from 'react'
import Navbar from './nav'
import Hreo from './hero'
import Exp from './areatwo'
import Card from './card.jsx'
import Footer from './fotter.jsx'

function App() {
  return (
    <>
    <div className="bg-neutral-900 m-0 p-0 box-border h-auto"> 
       <Navbar />
      <Hreo />
      <Exp/>
      <Card/>
      <Footer/>
    </div>
    </>
  )
}

export default App
