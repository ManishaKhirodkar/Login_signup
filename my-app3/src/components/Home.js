import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }
    return (
        <div>
            <header className="head">
                <div className="logo">
                    SWISS BEAUTY
                </div>
                <ul className="nav-ul">
                    <li>FACE</li>
                    <li>EYE</li>
                    <li>LIPS</li>
                    <li>NAIL</li>
                    <li>SKIN CARE</li>
                    <li>GIFTING</li>
                    <li>NEW ARRIVALS</li>
                </ul>

                <div className="search">
                    <Link to="/" className="login"><i className="bi bi-search me-2"></i>Search</Link>
                </div>

                {auth ? <div className="login">
                    <Link onClick={logout} to="/signup" className="login"><i className="bi bi-person me-2 "></i>Logout ({JSON.parse(auth).firstname})</Link>
                </div> :
                    <div className="login">
                        <li><Link to="/login" className="login">Login</Link></li>
                        <li><Link to="/signup" className="login">Signup</Link></li>
                    </div>}
            </header>
        </div>
    )
}

export default Home