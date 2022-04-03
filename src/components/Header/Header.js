import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full shadow h-16 flex justify-center gap-8 items-center uppercase">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'border-b-2 border-blue-500 text-blue-500' : 'border-b-2 border-transparent'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/reviews"
        className={({ isActive }) =>
          isActive ? 'border-b-2 border-blue-500 text-blue-500' : 'border-b-2 border-transparent'
        }
      >
        Reviews
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? 'border-b-2 border-blue-500 text-blue-500' : 'border-b-2 border-transparent'
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          isActive ? 'border-b-2 border-blue-500 text-blue-500' : 'border-b-2 border-transparent'
        }
      >
        Blogs
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'border-b-2 border-blue-500 text-blue-500' : 'border-b-2 border-transparent'
        }
      >
        About
      </NavLink>
    </header>
  );
};

export default Header;
