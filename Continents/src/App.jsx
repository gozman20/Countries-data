import { useState } from 'react'
import AllCountries from './components/AllCountries'
import Navbar from './components/Navbar'
import Continents from './components/Continents'
import { useSelector } from 'react-redux'


function App() {
  const {mode}=useSelector((store)=>store)

  return (
    
    <div className={`${mode==='light' ? '': 'bg-dark'} h-screen`}>
      <Navbar/>
     <AllCountries/>
     <Continents/>
    </div>
  )
}

export default App
