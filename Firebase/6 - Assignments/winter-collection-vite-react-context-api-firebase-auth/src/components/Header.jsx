import { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from "../provider/AuthProvider";
import { Loading } from '../pages';
import { FaUserGraduate } from "react-icons/fa";
import { FcDonate } from "react-icons/fc";
import { FiLogOut, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const image = "https://i.ibb.co.com/FbPg92qw/relief.jpg";
  // console.log(user);
  

  if (loading) return <Loading />;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo & Slogan */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-semibold text-blue-600">
          <FcDonate className="text-3xl" />
          Winter Campaign .........
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-5 text-gray-700 font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-500"}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-500"}>About</NavLink>
          <NavLink to="/auth/register" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-500"}>Register</NavLink>
          {user && <NavLink to="/update" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-500"}>Update</NavLink>}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="hidden md:flex items-center gap-2">
                <img src={user.photoURL ? user.photoURL : image} alt="User" className="w-9 h-9 rounded-full border" />
                <span className="text-gray-800">{user.displayName}</span>
              </div>
              <button
                onClick={logOut}
                className="hidden md:flex items-center gap-1 text-red-500 hover:text-red-600"
              >
                <FiLogOut />
                <span className="text-sm">Logout</span>
              </button>
            </>
          ) : (
            <Link to="/auth/login" className="hidden md:block text-blue-600 hover:text-blue-800 text-xl">
              <FaUserGraduate />
            </Link>
          )}
          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-2xl text-gray-700">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <ul className="flex flex-col gap-3 text-gray-700 font-medium">
            <NavLink to="/" onClick={toggleMenu} className="hover:text-blue-500">Home</NavLink>
            <NavLink to="/about" onClick={toggleMenu} className="hover:text-blue-500">About</NavLink>
            <NavLink to="/future" onClick={toggleMenu} className="hover:text-blue-500">Future</NavLink>

            {user ? (
              <>
                <div className="flex items-center gap-2">
                  <img src={user.photoURL} alt="User" className="w-9 h-9 rounded-full border" />
                  <span>{user.displayName}</span>
                </div>
                <button
                  onClick={() => { logOut(); toggleMenu(); }}
                  className="flex items-center gap-1 text-red-500 hover:text-red-600"
                >
                  <FiLogOut />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link to="/auth/login" onClick={toggleMenu} className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                <FaUserGraduate />
                <span>Login</span>
              </Link>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
