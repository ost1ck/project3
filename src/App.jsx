// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext.jsx'; // Оновлений шлях
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import Products from './pages/Products';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import About from './pages/About';
import './index.css';

function App() {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </CartProvider>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;