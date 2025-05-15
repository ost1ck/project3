// src/pages/Offers.jsx
import { useState } from 'react';
import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';
import CartModal from '../components/CartModal';
import Slogan from '../components/Slogan';
import Header from '../components/Header';
import styles from '../assets/styleOffers.module.css'; // У Offers.jsx

const products = [
  {
    name: 'Креатин',
    image: '/ProdPhoto3.png',
    image2: 'creatinevitya2.png',
    rating: '★★★★★',
    price: '759 грн',
    availability: 'На складі',
    badge: '31%',
    description: 'Креатин для покращення фізичної витривалості.',
  },
  {
    name: 'Боксерські рукавиці',
    image: '/ProdPhoto5.png',
    rating: '★★★☆☆',
    price: '3479 грн',
    availability: 'Немає в наявності',
    badge: '17%',
    description: 'Міцні рукавиці для боксу.',
  },
  {
    name: 'Спортивна пов\'язка Nike',
    image: '/ProdPhoto6.png',
    rating: '★★☆☆☆',
    price: '390 грн',
    availability: 'Немає в наявності',
    badge: '20%',
    description: 'Практична пов\'язка для тренувань.',
  },
  {
    name: 'Гантелі',
    image: '/ProdPhoto7.png',
    rating: '★★★★☆',
    price: '10999 грн',
    availability: 'На складі',
    badge: '32%',
    description: 'Гантелі для домашніх тренувань.',
  },
  {
    name: 'Гейнер',
    image: '/ProdPhoto8.png',
    rating: '★★★☆☆',
    price: '1750 грн',
    availability: 'На складі',
    badge: '8%',
    description: 'Гейнер для набору маси.',
  },
  {
    name: 'Футбольний м\'яч',
    image: '/ProdPhoto9.png',
    rating: '★★★★☆',
    price: '4395 грн',
    availability: 'Немає в наявності',
    badge: '37%',
    description: 'Якісний м\'яч для футболу.',
  },
];

function Offers() {
  const [showOnlyInStock, setShowOnlyInStock] = useState(true);
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = showOnlyInStock
    ? products.filter(product => product.availability === 'На складі')
    : products;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') {
      const priceA = parseFloat(a.price.replace(' грн', ''));
      const priceB = parseFloat(b.price.replace(' грн', ''));
      return priceA - priceB;
    } else if (sortBy === 'price-desc') {
      const priceA = parseFloat(a.price.replace(' грн', ''));
      const priceB = parseFloat(b.price.replace(' грн', ''));
      return priceB - priceA;
    } else if (sortBy === 'rating-asc') {
      const ratingA = a.rating.split('★').length - 1;
      const ratingB = b.rating.split('★').length - 1;
      return ratingA - ratingB;
    } else if (sortBy === 'rating-desc') {
      const ratingA = a.rating.split('★').length - 1;
      const ratingB = b.rating.split('★').length - 1;
      return ratingB - ratingA;
    }
    return 0;
  });

  return (
    <div>
      <Header />
      <main>
        <Navigation />
        <div style={{ padding: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ marginRight: '10px' }}>Сортувати за:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={styles.sortSelect}
            >
              <option value="default">За замовчуванням</option>
              <option value="price-asc">Ціна: від дешевих до дорогих</option>
              <option value="price-desc">Ціна: від дорогих до дешевих</option>
              <option value="rating-asc">Рейтинг: від низького до високого</option>
              <option value="rating-desc">Рейтинг: від високого до низького</option>
            </select>
          </div>
          <button
            className={styles.filterButton}
            onClick={() => setShowOnlyInStock(!showOnlyInStock)}
          >
            {showOnlyInStock ? 'Показати всі товари' : 'Показати лише в наявності'}
          </button>
          <section className={styles.products}>
            {sortedProducts.map((product, index) => (
              <ProductCard key={index} product={product} showArrows={true} />
            ))}
          </section>
        </div>
        <Slogan />
        <CartModal />
      </main>
    </div>
  );
}

export default Offers;