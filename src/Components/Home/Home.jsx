import React from 'react'
import Header from '../../pages/Header/Header'
import fragimg from '../../assets/fragimage.png'
import './Home.css'

import Features from '../../pages/features/Features'
import Features2 from '../../pages/features2/Features2'

const Home = () => {
  return (
    <>
    <div className='frag-animation-div'>
        <img src="https://www.pngplay.com/wp-content/uploads/2/Women-Perfume-Transparent-Image.png" alt="" />
    </div>
    <div>
      <Header/>
      <Features/>
      <Features2/>
    </div>
    </>
  )
}

export default Home
