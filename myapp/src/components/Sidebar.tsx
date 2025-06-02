import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  TrendingUp,
  Newspaper,
  Zap,
  Settings,
  Menu,
  X,
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: '/dashboard/overview', icon: <Home size={20} />, label: 'Overview' },
    { to: '/dashboard/trends', icon: <TrendingUp size={20} />, label: 'Trends' },
    { to: '/dashboard/news', icon: <Newspaper size={20} />, label: 'News' },
    { to: '/dashboard/predictions', icon: <Zap size={20} />, label: 'Predictions' },
    { to: '/dashboard/settings', icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <>
      <div className="md:hidden p-4 bg-gray-950 flex justify-between items-center text-white">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'w-64' : 'w-16'
        } fixed md:w-64 top-0 left-0 h-full bg-gray-950 shadow-md z-40 transition-all duration-300 ease-in-out md:static`}>
        <nav className="flex flex-col gap-2 p-4 mt-4">
          {navItems.map(({ to, icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded text-white hover:text-blue-500 ${
                  isActive ? 'text-blue-600 font-semibold' : ''
                }`
              }
              onClick={() => !isOpen && setIsOpen(true)}>
              <span>{icon}</span>
              <span
                className={`transition-opacity duration-200 ${
                  isOpen || window.innerWidth >= 768 ? 'opacity-100' : 'opacity-0 hidden'
                }`}>
                {label}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
