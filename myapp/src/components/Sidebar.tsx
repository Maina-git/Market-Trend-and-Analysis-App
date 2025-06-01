import { NavLink } from 'react-router-dom';
import { Home, TrendingUp, Newspaper, Zap, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md h-full hidden md:block">
      <div className="p-4 text-xl font-bold text-blue-600">ForexVision</div>
      <nav className="flex flex-col gap-2 p-4">
        <NavLink to="/dashboard/overview" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
            <Home size={20} /> Overview
          </div>
        </NavLink>
        <NavLink to="/dashboard/trends" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
            <TrendingUp size={20} /> Trends
          </div>
        </NavLink>
        <NavLink to="/dashboard/news" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
            <Newspaper size={20} /> News
          </div>
        </NavLink>
        <NavLink to="/dashboard/predictions" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
            <Zap size={20} /> Predictions
          </div>
        </NavLink>
        <NavLink to="/dashboard/settings" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}>
          <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
            <Settings size={20} /> Settings
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;