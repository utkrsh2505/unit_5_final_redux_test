import React from 'react'
import { Login_input } from '../Components/Login_input'
import { useDispatch } from 'react-redux'
import { Auth_api } from '../Redux/Auth/auth_api';
export const Login = () => {
  const dispatch = useDispatch();
  const handleLogin=(payload)=>{
    dispatch(Auth_api(payload));


  }
  return (
    <div><Login_input handleLogin={handleLogin}/></div>
  )
}
