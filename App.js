import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(() => console.log('Service Worker Registered'))
        .catch(err => console.error('SW Error:', err));
    }
  }, []);

  return (
    <main style={{ fontFamily: 'serif', backgroundColor: '#fef6e4', color: '#001858', minHeight: '100vh', padding: '2rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>The Urban Forager</h1>
        <p style={{ fontStyle: 'italic' }}>Curated secondhand finds for clever scavengers.</p>
      </header>

      <section style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {[1,2,3,4,5,6].map(i => (
          <div key={i} style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <img
              src={`https://source.unsplash.com/400x300/?vintage,clothing,${i}`}
              alt={`Item ${i}`}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0.75rem', marginBottom: '1rem' }}
            />
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Item #{i}</h2>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>A stylish vintage treasure you didn’t know you needed.</p>
            <button style={{ marginTop: '0.5rem', width: '100%', padding: '0.5rem', backgroundColor: '#f582ae', color: 'white', border: 'none', borderRadius: '0.5rem' }}>
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      <footer style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Join the Trash Panda Syndicate</h3>
        <p>Get first dibs on fresh finds and exclusive deals.</p>
        <input placeholder="Enter your email" style={{ padding: '0.5rem', borderRadius: '0.5rem', marginRight: '0.5rem' }} />
        <button style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', backgroundColor: '#8bd3dd', color: '#001858' }}>
          Subscribe
        </button>
        <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '1rem' }}>&copy; 2025 The Urban Forager</p>
      </footer>
    </main>
  );
}

export default App;
