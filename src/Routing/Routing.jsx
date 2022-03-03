import React, { useEffect } from 'react'
import '../App.css';
import {Route,Link,Routes} from "react-router-dom";
import { Login } from '../Pages/Login';
import { Error } from '../Pages/Error';
import { Home } from '../Pages/Home';
import { Posts } from '../Pages/Posts';
import { Users } from '../Pages/Users';
import { useNavigate,useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { logout_success } from '../Redux/Auth/auth.action';
export const Routing = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {pathname} = useLocation();
    const {isLogin,isError,isLoading} = useSelector((state)=>state.auth)
 useEffect(()=>{
     if(isLogin){
        if(pathname==="/login"){
            navigate("/");
        }
        else{
            navigate(pathname);
        }
     }
     else{
         navigate("/login")
     }

 },[navigate,isLogin,pathname]);
 
    return (
    <>
    <nav className='nav'>
        <Link  to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
        <button onClick={()=>dispatch(logout_success())}>Logout</button>
      
    </nav>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="*" element={<Error/>}/>
        
    </Routes>
    </>
  )
}
