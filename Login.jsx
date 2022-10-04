import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Login = () => {

  const [err,setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

  try {
    await signInWithEmailAndPassword(auth, email, password)
    navigate("/")
  } catch (err) {
    setErr(true);
  }
  };

  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Lama Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Sign in</button>
                {err && <span>Something went Wrong</span>}
                <p>You don't have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
    </div>
  );
};

export default Login;