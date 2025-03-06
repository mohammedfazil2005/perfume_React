import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import AnimatedCursor from 'react-animated-cursor'


function App() {
  return (
    <>
  {/* <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="0,0,0"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        /> */}
    <Navbar/>
    <Home/>
    </>
  )
}

export default App
