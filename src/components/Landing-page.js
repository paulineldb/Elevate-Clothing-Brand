import React from 'react'
import './Landing-page.css'
import Pic1 from '../images/pic1.jpg'

const LandingPage = () => {
    return (
      <div id="brand-intro">
        <div id='intro-img'><img src={Pic1} id="Pic1"alt="a man wearing the brand's products, standing in a skatepark" /></div>
        <div id="infos">
        <h1>Welcome to Elevate!</h1>
        <p>We are a premium urban streetwear brand that focuses on sustainability, comfort and self-expression. We value minimalism and simplicity, but also believe in making a bold statement through our designs.</p>
        <p>We use environmentally friendly materials such as organic cotton, recycled polyester and hemp to create our garments. Elevate is dedicated to reducing its carbon footprint and is constantly seeking new ways to be more sustainable in its production process.</p>
        <p>We aim to create stylish, sustainable and empowering clothing that inspires our customers to live their best lives.</p>
        <p>We believe in providing our customers with exceptional service and support, so please don't hesitate to reach out to us with any questions or concerns.</p>
        <p><em>#ElevateYourStyle</em></p>
        </div>
      </div>
    );
  };
  
  export default LandingPage;