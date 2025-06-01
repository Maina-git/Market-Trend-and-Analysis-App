import { Routes, Route } from 'react-router-dom';
//import Sidebar from '../components/Sidebar';
//import Navbar from '../components/Navbar';
//import Overview from './pages/Overview';
//import Trends from './pages/Trends';
//import News from './pages/News';
//import Predictions from './pages/Predictions';
//import Settings from './pages/Settings';


//import Overview from './pages/Overview';
//import Settings from './pages/Settings';
import Predictions from './pages/Predictions';
import News from './pages/News';
import Trends from './pages/Trends';
import Sidebar from '../components/Sidebar';
import Overview from './pages/Overview';
import Settings from './pages/Settings';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 overflow-y-auto flex-1">
          <Routes>
            <Route path="overview" element={<Overview />} />
            <Route path="trends" element={<Trends />} />
            <Route path="news" element={<News />} />
            <Route path="predictions" element={<Predictions />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
