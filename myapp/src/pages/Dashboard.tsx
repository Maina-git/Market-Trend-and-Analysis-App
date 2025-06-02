import { Routes, Route } from 'react-router-dom';
import Predictions from './pages/Predictions';
import News from './pages/News';
import Trends from './pages/Trends';
import Sidebar from '../components/Sidebar';
import Overview from './pages/Overview';
import Settings from './pages/Settings';
import Navbar from '../components/Navbar';
import LandingPage from './pages/LandingPage';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-2 overflow-y-auto flex-1">
         <Routes>
  <Route index element={<LandingPage />} /> 
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
