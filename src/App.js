import React, { useState } from 'react'
import './App.css';
import Header from './components/Header.js';
import LandingPage from './components/Landing-page.js'
import Product from './components/Product.js'
import Pic2 from './images/pic2.jpg'
import Pic3 from './images/pic3.jpg'
import Pic4 from './images/pic4.jpg'

const products = [
  {
    name: "T-Shirt",
    price: 20,
    image: Pic3,
    description: "A comfortable and stylish t-shirt.",
  },
  {
    name: "Jeans",
    price: 50,
    image: Pic4,
    description: "A pair of high-quality jeans.",
  },
  {
    name: "Sweater",
    price: 30,
    image: Pic2,
    description: "A warm and cozy sweater.",
  },
];

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div className="App" id="app">
      <Header isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
      <LandingPage />
      <div id="products-section">
        <h2 id="products-h2">Our products</h2>
        {products.map((product) => (
          <Product
            key={product.name}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
