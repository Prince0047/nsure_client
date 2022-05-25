import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/nsure_logo.png';
import '../assets/styles/header.scss';

function Header(props) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();

    props.auth(false);

    navigate('/login');
  };

  return (
    <div className='header'>
      <div className='head--logo'>
        <Link to='/'>
          <img className='logo--img' src={logo} alt='' />
        </Link>
      </div>
      <div className='navh'>
        <ul className='nav--list'>
          <li className='nav--list--item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav--list--item'>
            <Link to='/policy'>Policies</Link>
          </li>
          {props.isLoggedIn && (
            <li className='nav--list--item'>
              <Link to='/myaccount'>My Account</Link>
            </li>
          )}
          {props.isLoggedIn ? (
            <li className='nav--list--item' onClick={logout}>
              <h5>Log Out</h5>
            </li>
          ) : (
            <li className='nav--list--item'>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
