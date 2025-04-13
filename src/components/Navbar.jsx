import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // Function to generate route path from nav item
  const getPathFromNav = (nav) => {
    return `/${nav.toLowerCase()}`;
  };

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <NavLink to="/" className="flex items-center">
          <img src={appleImg} alt="Apple" width={14} height={18} />
        </NavLink>

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <NavLink 
              key={nav} 
              to={getPathFromNav(nav)} 
              className={({ isActive }) => 
                `px-5 text-sm cursor-pointer transition-all ${
                  isActive ? 'text-white' : 'text-gray hover:text-white'
                }`
              }
            >
              {nav}
            </NavLink>
          ))}
        </div>

        
      </nav>
    </header>
  )
}

export default Navbar
