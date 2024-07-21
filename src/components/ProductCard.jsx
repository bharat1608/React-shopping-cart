import React from 'react';

const ProductCard = ({ product, inCart, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={() => inCart ? onRemoveFromCart(product.id) : onAddToCart(product.id)}>
        {inCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;


