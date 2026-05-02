import { useCart } from '../context/CartContext.jsx';

export default function Header({ onCartClick }) {
  const { cartCount } = useCart();

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: '#000',
      color: '#fff',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>☕ ColdFrame Café</h1>
      <nav>
        <button
          onClick={onCartClick}
          style={{
            background: 'transparent',
            border: '1px solid #fff',
            color: '#fff',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          🛒 Cart
          {cartCount > 0 && (
            <span style={{
              background: '#e74c3c',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem'
            }}>
              {cartCount}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}
