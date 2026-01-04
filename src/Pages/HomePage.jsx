import React from 'react'
import Navbar from '../Components/Navbar';
import FeaturedProduct from '../Components/Home/FeaturedProduct';
import SliderFeature from '../Components/Home/SliderFeature';
import Categories from '../Components/Home/Categories';
import Contact from '../Components/Home/Contact';
import Footer from '../Components/Home/Footer';
import Slider from '../Components/Home/Slider';

const HomePage = () => {
  return (<>
    <Navbar/>
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
