import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../redux/slices/authSlice'

export const Navbar = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {isAuthenticated,user}=useSelector(state=> state.auth);

  const handleLogout=()=>{
    dispatch(logout());
    navigate('/')
  }

  return (
    <nav style={{display:'flex', justifyContent:'space-between', padding:'1rem', background:'#f5f5f5'}}>
     <h1>My Library</h1>
     <div style={{display:'flex', gap:'1rem', alignItems:'center'}}>
      <Link to='/'>Home</Link>
      {isAuthenticated ?(
        <>
        <Link to='/mybooks'>My Books</Link>
        <span>{user?.email}</span>
        <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        </>
      )
    }
     </div>
    </nav>
  )
}
