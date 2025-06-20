import React, { useState } from 'react'
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";
import { useNavigate } from 'react-router';
const Login = () => {

  const auth = getAuth();
  const db = getDatabase();
  const navigate = useNavigate();

  const [logemail, setLogEmail] = useState("")
  const [logpassword, setLogPassword] = useState("")


  const takeLoginvalue = (e) => {
    const { id, value } = e.target;
    if (id == "email") {
      setLogEmail(value)
    }
    else if (id == "password") {
      setLogPassword(value)
    }
  }


  const handleLogin = () => {
    
  }
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Enter Your Email *</label>
        <input
          id="email"
          type="email"
          placeholder="Enter Your Email"
          className="border px-2 py-1 rounded  "
          onChange={(e) => takeLoginvalue(e)}
        />
       
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Enter Your Password *</label>
        <input
          id="password"
          type="password"
          className="border px-2 py-1 rounded "
          placeholder="Enter Your Password"
          onChange={(e) => takeLoginvalue(e)}
        />

        
      </div>
      <button
        className="px-3 py-1 bg-blue-600 rounded text-white font-medium mt-2 cursor-pointer"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login