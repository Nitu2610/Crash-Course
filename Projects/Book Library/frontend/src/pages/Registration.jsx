import { useState } from 'react';
import { useDispatch } from 'react-redux';
import API from '../utils/axios';
import { login } from '../redux/slices/authSlice';

export const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/register', { email, password });
      dispatch(login(res.data)); // ✅ correct action
    } catch (err) {
      alert('Registration failed');
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};
