// src/pages/Profile.jsx
import Navigation from '../components/Navigation';
import Slogan from '../components/Slogan';
import CartModal from '../components/CartModal';
import Header from '../components/Header';
import styles from '../assets/styleProfile.module.css';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('cart');
    navigate('/');
  };

  return (
    <div>
      <Header />
      <main>
        <Navigation showCart={false} /> {/* Додаємо showCart={false} */}
        <section className={styles.profileContainer}>
          <h2>Мій профіль</h2>
          <img src="/ProfilePhoto.png" alt="Фото профілю" className={styles.avatar} />
          <div className={styles.profileInfo}>
            <p><strong>Ім’я:</strong> Остап</p>
            <p><strong>Email:</strong> ostap@example.com</p>
            <p><strong>Телефон:</strong> +380 96 123 4567</p>
          </div>
          <section className={styles.orderHistory}>
            <h3>Мої замовлення</h3>
            <ul>
              <li>01.04.2025 — Креатин — 759 грн</li>
              <li>15.03.2025 — Гантелі — 10 999 грн</li>
            </ul>
          </section>
          <section className={styles.wishlist}>
            <h3>Бажані товари</h3>
            <ul>
              <li>Кросівки Nike Air Zoom — 5 299 грн</li>
              <li>Боксерські рукавиці Adidas — 1 999 грн</li>
              <li>Спортивна пов'язка Nike — 399 грн</li>
            </ul>
          </section>
          <button className={styles.logoutButton} onClick={handleLogout}>Вийти</button>
        </section>
        <Slogan />
        <CartModal />
      </main>
    </div>
  );
}

export default Profile;