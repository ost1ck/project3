// src/context/CartContext.jsx
import { createContext, useContext, useState } from 'react';
import { useToast } from './ToastContext.jsx'; // Оновлений шлях

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toastContext = useToast();
  if (!toastContext) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  const { showToast } = toastContext;

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      let updatedCart;
      if (existingItem) {
        updatedCart = prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        updatedCart = [...prevCart, { ...item, quantity: 1 }];
      }
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      showToast(`${item.name} доданий до кошика`, 'success');
      return updatedCart;
    });
  };

  const updateCart = (index, newQuantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item, i) => (i === index ? { ...item, quantity: Math.max(0, newQuantity) } : item))
        .filter((item) => item.quantity > 0);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      if (newQuantity <= 0) {
        const removedItem = prevCart[index];
        showToast(`${removedItem.name}, видалений з кошика`, 'error');
      }
      return updatedCart;
    });
  };

  const value = {
    cart,
    setCart,
    addToCart,
    updateCart,
    isCartOpen,
    setIsCartOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
export { CartContext };