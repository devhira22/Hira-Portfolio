
// import React from 'react'
import React, { useState } from 'react';
import Navbar from './components/Navbar'
// import Home from './pages/Home'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
function App() {
   const [currentPage, setCurrentPage] = useState(0);
  return (
    <>
    <Navbar />
    {/* <Home /> */}
    <HomePage 
     currentPage={currentPage}
        setCurrentPage={setCurrentPage}
         />

    <Footer setCurrentPage={setCurrentPage}/>
    </>
  )
}

export default App
