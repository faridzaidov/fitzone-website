import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './../assets/icons/Logo.png'

export default function Navbar() {
    return (
        <nav className='p-4 sm:p-12 flex items-center gap-20 justify-between md:justify-start'>
            <Link to='/' className='flex items-center gap-2'>
                <img className='w-14' src={Logo} alt='navbar logo' />
            </Link>
            <div className="nav-menu flex gap-10 text-md sm:text-xl">
                <Link to='/'>Home</Link>
                <a href='/#exercises-section'>Exercises</a>
            </div>
        </nav>
    )
}
