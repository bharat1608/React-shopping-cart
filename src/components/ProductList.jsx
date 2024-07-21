import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../assets/products';

const ProductList = ({ cart, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          inCart={cart.includes(product.id)}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
        />
      ))}
    </div>
  );
};

export default ProductList;



