'use client';

import { useState } from 'react';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { mainnet } from 'wagmi/chains';
import styles from './store.module.css';
import { products, type Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Currency = 'EUR' | 'ETH';

export default function Store() {
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [currency, setCurrency] = useState<Currency>('EUR');
  const [currentImages, setCurrentImages] = useState<{ [key: string]: number }>({});

  const addToCart = (product: Product) => {
    if (cart.some(item => item.id === product.id)) {
      return; // Le produit est déjà dans le panier
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const getPrice = (product: Product, currency: Currency) => {
    const price = product.prices.find(p => p[currency]);
    return price ? price[currency] : 0;
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + getPrice(item, currency), 0);
  };

  const toggleCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowCart(!showCart);
  };

  const isInCart = (productId: string) => {
    return cart.some(item => item.id === productId);
  };

  const nextImage = (productId: string, maxLength: number) => {
    setCurrentImages(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % maxLength
    }));
  };

  const prevImage = (productId: string, maxLength: number) => {
    setCurrentImages(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + maxLength) % maxLength
    }));
  };

  return (
    <OnchainKitProvider chain={mainnet}>
      <div className={styles.container}>
        <div className="flex justify-between items-center mb-8">
          <h1 className={styles.title}>Boutique</h1>
          <Select value={currency} onValueChange={(value: Currency) => setCurrency(value)}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Devise" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="EUR">EUR</SelectItem>
              <SelectItem value="ETH">ETH</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className="relative">
                <img 
                  src={product.images[currentImages[product.id] || 0]} 
                  alt={product.name} 
                  className={styles.productImage} 
                />
                {product.images.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between p-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="bg-black/50 hover:bg-black/70"
                      onClick={() => prevImage(product.id, product.images.length)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="bg-black/50 hover:bg-black/70"
                      onClick={() => nextImage(product.id, product.images.length)}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
              <h3>{product.name}</h3>
              <div className={styles.description} dangerouslySetInnerHTML={{ __html: product.description }} />
              <p className={styles.price}>{getPrice(product, currency)} {currency}</p>
              <button 
                onClick={() => addToCart(product)}
                className={`${styles.addToCartButton} ${isInCart(product.id) ? styles.disabled : ''}`}
                disabled={isInCart(product.id)}
              >
                {isInCart(product.id) ? 'Déjà dans le panier' : 'Ajouter au panier'}
              </button>
            </div>
          ))}
        </div>

        <button className={styles.cartIcon} onClick={toggleCart}>
          🛒 ({cart.length})
        </button>

        {showCart && (
          <div className={styles.cart} onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2>Panier</h2>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowCart(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <span>{item.name}</span>
                <span>{getPrice(item, currency)} {currency}</span>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className={styles.removeButton}
                >
                  ✕
                </button>
              </div>
            ))}
            <div className={styles.total}>
              <h3>Total: {getTotalPrice()} {currency}</h3>
              {cart.length > 0 && (
                <Button 
                  className="w-full mt-4"
                  onClick={() => {
                    // TODO: Implémenter le paiement
                    alert('Paiement en cours de développement');
                  }}
                >
                  Payer avec {currency === 'ETH' ? 'Ethereum' : 'Euros'}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </OnchainKitProvider>
  );
}
