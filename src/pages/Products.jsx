// src/pages/Products.jsx
import { useState } from 'react';
import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';
import CartModal from '../components/CartModal';
import Slogan from '../components/Slogan';
import Header from '../components/Header';
import styles from '../assets/styleProducts.module.css'; // У Products.jsx

const products = [
  {
    name: 'Кросівки Nike',
    image: '/ProdPhoto1.png',
    image2: '/krasovki.png',
    rating: '★★★★★',
    price: '11900 грн',
    availability: 'На складі',
    description: 'Зручне та стильне взуття для тренувань.',
  },
  {
    name: 'Баскетбольний м\'яч',
    image: '/ProdPhoto2.png',
    image2: '/basket.png',
    rating: '★★★★☆',
    price: '2970 грн',
    availability: 'На складі',
    description: 'М\'яч для баскетболу з відмінним зчепленням та якісним покриттям.',
  },
  {
    name: 'Креатин',
    image: '/creatinevitya2.png',
    image2: '/ProdPhoto3.png',
    rating: '★★★★★',
    price: '980 грн',
    availability: 'На складі',
    description: 'Добавка для покращення витривалості та сили під час тренувань.',
  },
  {
    name: 'Спортивний костюм',
    image: '/ProdPhoto(4).png',
    rating: '★★★★☆',
    price: '4870 грн',
    availability: 'На складі',
    description: 'Стильний костюм для занять спортом або повсякденного носіння.',
  },
  {
    name: 'Боксерські рукавиці',
    image: '/ProdPhoto5.png',
    rating: '★★★☆☆',
    price: '3479 грн',
    availability: 'Немає в наявності',
    description: 'Міцні та зручні рукавиці для боксу. Ідеально підходять для тренувань.',
  },
  {
    name: 'Спортивна пов\'язка Nike',
    image: '/ProdPhoto6.png',
    rating: '★★★★☆',
    price: '670 грн',
    availability: 'Немає в наявності',
    description: 'Зручна пов\'язка, що поглинає вологу під час тренування.',
  },
  {
    name: 'Гантелі',
    image: '/ProdPhoto7.png',
    rating: '★★★★☆',
    price: '10999 грн',
    availability: 'На складі',
    description: 'Гантелі для домашніх тренувань, виготовлені з якісних матеріалів.',
  },
  {
    name: 'Гейнер',
    image: '/ProdPhoto8.png',
    rating: '★★★☆☆',
    price: '1290 грн',
    availability: 'На складі',
    description: 'Харчова добавка для набору м\'язової маси з високим вмістом калорій.',
  },
  {
    name: 'Футбольний м\'яч',
    image: '/ProdPhoto9.png',
    rating: '★★★★☆',
    price: '4395 грн',
    availability: 'Немає в наявності',
    description: 'Якісний футбольний м\'яч для ігор на різних покриттях.',
  },
];

function Products() {
  const [showOnlyInStock, setShowOnlyInStock] = useState(true); // Змінюємо змінну та початкове значення
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

export default Products;