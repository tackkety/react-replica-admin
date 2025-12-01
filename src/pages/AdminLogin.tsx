import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication (in production, use proper authentication)
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('adminLoggedIn', 'true');
      navigate('/admin');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'var(--bg-color)'
    }}>
      <div style={{
        background: 'var(--second-bg-color)',
        padding: '3rem',
        borderRadius: '1rem',
        maxWidth: '400px',
        width: '90%',
        border: '1px solid rgba(12, 204, 255, 0.2)'
      }}>
        <h2 style={{ 
          color: 'var(--text-color)', 
          marginBottom: '2rem',
          textAlign: 'center',
          fontSize: '2.5rem'
        }}>
          Admin <span style={{ color: 'var(--main-color)' }}>Login</span>
        </h2>
        
        {error && (
          <div style={{
            background: 'rgba(255, 0, 0, 0.1)',
            color: '#ff6b6b',
            padding: '1rem',
            borderRadius: '0.5rem',
            marginBottom: '1.5rem',
            fontSize: '1.4rem'
          }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ 
              display: 'block',
              color: 'var(--text-color)',
              marginBottom: '0.5rem',
              fontSize: '1.6rem'
            }}>
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '0.5rem',
                background: 'var(--bg-color)',
                border: '1px solid rgba(12, 204, 255, 0.3)',
                color: 'var(--text-color)',
                fontSize: '1.6rem'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ 
              display: 'block',
              color: 'var(--text-color)',
              marginBottom: '0.5rem',
              fontSize: '1.6rem'
            }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '0.5rem',
                background: 'var(--bg-color)',
                border: '1px solid rgba(12, 204, 255, 0.3)',
                color: 'var(--text-color)',
                fontSize: '1.6rem'
              }}
            />
          </div>
          
          <button
            type="submit"
            className="btn"
            style={{
              width: '100%',
              padding: '1.2rem',
              fontSize: '1.6rem'
            }}
          >
            Login
          </button>
        </form>
        
        <p style={{
          textAlign: 'center',
          marginTop: '2rem',
          color: 'var(--text-color)',
          fontSize: '1.4rem'
        }}>
          Default credentials: admin / admin123
        </p>
        
        <a 
          href="/"
          style={{
            display: 'block',
            textAlign: 'center',
            marginTop: '1rem',
            color: 'var(--main-color)',
            fontSize: '1.4rem'
          }}
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default AdminLogin;