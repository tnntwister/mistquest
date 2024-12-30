'use client';

import { useState } from 'react';
import { SendTransactionButton } from '@coinbase/onchainkit/button';
import styles from './store.module.css';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Article 1",
    price: 0.01,
    description: "Description de l'article 1",
    image: "/images/product1.jpg"
  },
  {
    id: 2,
    name: "Article 2",
    price: 0.02,
    description: "Description de l'article 2",
    image: "/images/product2.jpg"
  },
  // Ajoutez d'autres produits ici
];

export default function Store() {
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Boutique</h1>
      
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className={styles.price}>{product.price} ETH</p>
            <button 
              onClick={() => addToCart(product)}
              className={styles.addToCartButton}
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>

      <div className={styles.cartIcon} onClick={() => setShowCart(!showCart)}>
        🛒 ({cart.length})
      </div>

      {showCart && (
        <div className={styles.cart}>
          <h2>Panier</h2>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <span>{item.name}</span>
              <span>{item.price} ETH</span>
              <button 
                onClick={() => removeFromCart(item.id)}
                className={styles.removeButton}
              >
                ✕
              </button>
            </div>
          ))}
          <div className={styles.total}>
            <h3>Total: {getTotalPrice()} ETH</h3>
            {cart.length > 0 && (
              <SendTransactionButton
                chainId="1"
                to="YOUR_ETHEREUM_ADDRESS"
                value={getTotalPrice().toString()}
                onSuccess={() => {
                  alert('Paiement réussi !');
                  setCart([]);
                  setShowCart(false);
                }}
              >
                Payer avec Ethereum
              </SendTransactionButton>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
