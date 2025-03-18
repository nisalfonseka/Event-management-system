import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="bg-yellow-500 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Event Management System</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            {!user ? (
              <>
                <li><Link to="/login" className="hover:underline">Login</Link></li>
                <li><Link to="/register" className="hover:underline">Register</Link></li>
              </>
            ) : (
              <>
                <li>
                  <Link 
                    to={user.isAdmin ? "/admin-dashboard" : "/dashboard"} 
                    className="hover:underline"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={logout} 
                    className="hover:underline"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
