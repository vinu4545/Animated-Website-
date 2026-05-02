import { useState } from 'react';
import { categories, products } from '../data/products.js';
import ProductCard from './ProductCard.jsx';

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', margin: '2rem 0', fontSize: '2rem' }}>Our Menu</h2>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
        marginBottom: '2rem'
      }}>
        <button
          onClick={() => setSelectedCategory('all')}
          style={{
            background: selectedCategory === 'all' ? '#000' : '#fff',
            color: selectedCategory === 'all' ? '#fff' : '#000',
            border: '1px solid #000',
            padding: '0.75rem 1.5rem',
            borderRadius: '25px',
            cursor: 'pointer'
          }}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            style={{
              background: selectedCategory === category.id ? '#000' : '#fff',
              color: selectedCategory === category.id ? '#fff' : '#000',
              border: '1px solid #000',
              padding: '0.75rem 1.5rem',
              borderRadius: '25px',
              cursor: 'pointer'
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
