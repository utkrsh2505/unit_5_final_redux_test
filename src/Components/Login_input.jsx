import React from 'react'
import { useState } from 'react'
export const Login_input = ({handleLogin}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit = (e)=>{
        console.log("clicked")
        e.preventDefault();
        const payload = {
            email,
            password
        }
        handleLogin(payload)

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type = "text" placeholder='Type Something' value={email} onChange={(e)=>setEmail(e.target.value)}/>
           <br/>
           <br/>
            <input type = "text" placeholder='Type Something' value={password} onChange={(e)=>setPassword(e.target.value)}/>
       <br/>
       <br/>
       <input type="submit" value="login"/>
        </form>
    </div>
  )
}
