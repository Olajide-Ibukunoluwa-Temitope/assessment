import React from 'react';
import profile from '../../../assets/user-circle-regular.svg';
import './Navbar.styles.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-item'>
                <a href='/'>TRIPS</a>
            </div>
            <div className='navbar-item'>
                <a href='/'>RECENTLY VIEWED</a>
            </div>
            <div className='navbar-item'>
                <a href='/'>BOOKINGS</a>
            </div>
            <div className='navbar-item'>
                <img src={profile} className='profile-img' alt='profile-img' />
            </div>
        </div>
    )
}

export default Navbar
