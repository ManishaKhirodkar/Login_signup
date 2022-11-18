import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
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

                <div className="search"><i className="bi bi-search me-2"></i>Search</div>
                <Link to="/login" className="login"><i className="bi bi-person me-2 "></i>Login</Link>
            </header>
    </div>
  )
}

export default Nav