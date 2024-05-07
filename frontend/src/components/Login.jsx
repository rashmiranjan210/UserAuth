
import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const usenavigate = useNavigate()
    

    const handelevent=async(e)=>{
   
        e.preventDefault();
        
              try {
                console.log("dfjdjfdsfnjdf")
                await axios.post('http://localhost:3000/login/',{email,password}).
                then(function (response) {
                    console.log(response);
                    usenavigate('/home');
                  })
                  .catch(function (error) {
                    console.log(error);
                    alert("invalid")
                  });
              } catch (error) {
                console.log(error)
              }
        
    }



  return (
    <div>
        <form onSubmit={handelevent}>
            <h1>Login</h1>
            <br />
            Email <input
            placeholder='Enter your email address'
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            /><br />
            Password <input
            placeholder='Enter a password'
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            /><br />
            <button type="submit">Register</button>
        </form>
        
    
    </div>
  )
}

export default Login