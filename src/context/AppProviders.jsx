// src/context/AppProviders.jsx
import { ThemeProvider } from './ThemeContext';
import { ToastProvider } from './ToastContext';
import { CartProvider } from './CartContext';
import { BrowserRouter } from 'react-router-dom';

export default function AppProviders({ children }) {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ToastProvider>
          <CartProvider>{children}</CartProvider>
        </ToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
