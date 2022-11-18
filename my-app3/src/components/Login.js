import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/style.css'
import Nav from './Nav';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    }, [])
    const handlelogin = async () => {
        console.warn("email,password", email, password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'content-type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if (result.auth) {
            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('token', JSON.stringify(result.auth));
            navigate('/')
        } else {
            alert('Please enter correct details');
        }
    }
        return (
            <div>
                <Nav />
                <div class="container">
                    <h3 class="tit">LOGIN</h3>
                    <label class="uname" for="uname"><b>EMAIL</b></label>
                    <input type="email" name="uname" required value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label class="uname" for="psw"><b>PASSWORD</b></label>
                    <input type="password" name="psw" required value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button class="butn" type="submit" onClick={handlelogin}>Sign in</button>
                    <div class="sign">
                        <a href="/signup">Create account</a>

                    </div>

                </div>
            </div>
        )
    }

    export default Login;