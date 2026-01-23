import React, { useEffect } from 'react'
// import Navbar from '../Components/Navbar';
import FeaturedProduct from '../Components/Home/FeaturedProduct';
import SliderFeature from '../Components/Home/SliderFeature';
import Categories from '../Components/Home/Categories';
import Contact from '../Components/Home/Contact';
import Footer from '../Components/Home/Footer';
import Slider from '../Components/Home/Slider';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const authData = useSelector((state)=>state.Auth.value);

  useEffect(()=>{
   console.log(authData)
  },[authData])

  return (<>
    <Slider/>
    <FeaturedProduct/>
    <SliderFeature/>
    <Categories/>
    <Contact/>
    <Footer/>
    </>

  )
}

export default HomePage
