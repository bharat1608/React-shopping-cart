import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  
  const handleAddToCart = (id) => {
    setCart([...cart, id]);
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter(item => item !== id));
  };

  return (
    <div className="App">
      <Header cartCount={cart.length} />
      <main className="container">
        <ProductList 
          cart={cart} 
          onAddToCart={handleAddToCart} 
          onRemoveFromCart={handleRemoveFromCart} 
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;



