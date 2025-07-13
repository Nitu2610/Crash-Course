import { Navbar } from './components/Navbar'
import { AppRoutes } from './routes/AppRoutes'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './redux/slices/authSlice';
import API from './utils/axios';

function App() {
 const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get('/auth/me');
        dispatch(login(res.data)); // set user in Redux
      } catch (err) {
        // User not logged in — ignore
        console.log('User not logged in');
      }
    };

    fetchUser();
  }, [dispatch]);


  return (
    <>
     <Navbar/>
     <AppRoutes/>
    </>
  )
}

export default App
