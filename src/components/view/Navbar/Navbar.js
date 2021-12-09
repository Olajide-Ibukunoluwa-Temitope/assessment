import React from 'react';
import profile from '../../../assets/user-circle-regular.svg';
import './Navbar.styles.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-item'>
                <p>TRIPS</p>
            </div>
            <div className='navbar-item'>
                <p>RECENTLY VIEWED</p>
            </div>
            <div className='navbar-item'>
                <p>BOOKINGS</p>
            </div>
            <div className='navbar-item'>
                <img src={profile} className='profile-img' alt='profile-img' />
            </div>
        </div>
    )
}

export default Navbar
