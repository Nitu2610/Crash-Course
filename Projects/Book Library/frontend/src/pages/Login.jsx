import { useState } from 'react';
import { useDispatch } from 'react-redux';
import API from '../utils/axios'; // your Axios instance
import { login } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { email, password });
      dispatch(login(res.data)); // updates Redux state
      navigate('/mybooks'); // redirect after login
    } catch (err) {
      alert('Login failed. Check your credentials.');
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ maxWidth: '300px', margin: '2rem auto' }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};
