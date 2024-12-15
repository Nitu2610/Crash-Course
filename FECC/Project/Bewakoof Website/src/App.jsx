import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import { MiniHeader } from './components/Headercomp/MiniHeader';
import { Headerbar } from './components/Headercomp/Main_Header/Headerbar';
import { Navbar } from './components/Navbar/Navbar';
import { SlidingShow } from './components/Sections/ImageSlideShowOne/SlidingShow';
import { SaleCountDown } from './components/Sections/SalesCoutdown';
import { OfferCode } from './components/Sections/S2_Offer_code';
import { Footer } from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MiniHeader/>
     <Headerbar/>
     <Navbar/>
     <SlidingShow/>
     <SaleCountDown/>
     <OfferCode/>
     <Footer/>
    </>
  )
}

export default App
