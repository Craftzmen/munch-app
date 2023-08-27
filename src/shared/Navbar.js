import React from 'react';
import { Logo } from '../svgs/Logo';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.includes('/restaurants/') && location.pathname.includes('/checkout');

  if (hideNavbar) {
    return null; // Return null to hide the navbar
  }

  return (
    <nav className='w-full flex justify-between items-center px-10 lg:px-20 py-3 bg-white border-b border-zinc-200/60'>
      <Link to={'/'} className='flex items-center gap-x-3 text-pink-500'>    
          <Logo className='w-8 h-8' />
          <h1 className='text-lg font-semibold' >Munch</h1>
      </Link>
      <div>
        <button className='px-8 py-2 text-sm rounded-full bg-zinc-200 text-zinc-900 font-medium'>Book</button>
      </div>
    </nav>
  );
};

export default Navbar;
