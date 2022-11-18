import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './style/style.css'
import Nav from './Nav';

const Signup = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate= useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    },[])
    
    const collectData = async () => {
        console.warn(firstname,lastname,email,password)
        let result = await fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify({ firstname,lastname, email, password }),
            headers: {
                'content-type': 'application/json'
            },
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result.result));
        localStorage.setItem("token", JSON.stringify(result.auth));
        if (result) {
            navigate('/')
        }
    }
    return (

        <div>
<Nav/>
            <div className="container">
                <h3 className="tit">CREATE ACCOUNT</h3>
                <label className="uname" for="uname"><b>FIRST NAME</b></label>
                <input type="text" name="uname" required value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                <label className="uname" for="uname"><b>LAST NAME</b></label>
                <input type="text" name="uname" required
                    value={lastname} onChange={(e) => setLastname(e.target.value)} />

                <label className="uname" for="uname"><b>EMAIL</b></label>
                <input type="email" name="uname" required
                    value={email} onChange={(e) => setEmail(e.target.value)} />

                <label className="uname" for="psw"><b>PASSWORD</b></label>
                <input type="password" name="psw" required
                    value={password} onChange={(e) => setPassword(e.target.value)} />

                <button onClick={collectData} className="butn" type="submit">CREATE</button>

            </div>
        </div>
    )
}

export default Signup