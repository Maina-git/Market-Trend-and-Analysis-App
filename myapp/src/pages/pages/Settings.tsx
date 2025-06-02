import { useState } from 'react';

const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);
  const [timezone, setTimezone] = useState('UTC');
  
  return (
    <div className="p-6 bg-blue-950 rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-semibold mb-6 text-white">Settings</h2>
      <div className="bg-gray-950 p-6 rounded-lg shadow mb-6">
        <label htmlFor="timezone" className="block mb-2 font-medium text-gray-300">
          Timezone
        </label>
        <select
          id="timezone"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 text-white focus:ring-indigo-500">
          <option>UTC</option>
          <option>GMT</option>
          <option>EAT</option>
          <option>EST</option>
          <option>PST</option>
          <option>IST</option>
        </select>
      </div>

      <div className="bg-gray-950 p-6 rounded-lg shadow mb-6">
        <label className="block mb-2 font-medium text-white">Theme</label>
        <div className="flex items-center space-x-6">
          <label className="flex items-center space-x-2 text-white">
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === 'light'}
              onChange={() => setTheme('light')}
              className="form-radio"/>
            <span>Light</span>
          </label>
          <label className="flex items-center space-x-2 text-white">
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === 'dark'}
              onChange={() => setTheme('dark')}
              className="form-radio"/>
            <span>Dark</span>
          </label>
          <label className="flex items-center space-x-2 text-white">
            <input
              type="radio"
              name="theme"
              value="system"
              checked={theme === 'system'}
              onChange={() => setTheme('system')}
              className="form-radio"/>
            <span>System</span>
          </label>
        </div>
      </div>
      <div className="bg-gray-950 p-6 rounded-lg shadow mb-6">
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="form-checkbox h-5 w-5 text-indigo-600"/>
          <span className="font-medium text-white">Enable Notifications</span>
        </label>
        <p className="text-sm text-gray-300 mt-1">
          Receive alerts for major market movements and updates.
        </p>
      </div>

      <div className="bg-gray-950 p-6 rounded-lg shadow">
        <label className="block mb-2 font-medium text-gray-300" htmlFor="dataRefresh">
          Data Refresh Interval (minutes)
        </label>
        <input
          type="number"
          id="dataRefresh"
          min={1}
          max={60}
          defaultValue={5}
          className="border border-gray-300 p-2 rounded w-full text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
        <p className="text-sm text-gray-300 mt-1">
          Set how often market data updates automatically.
        </p>
      </div>
      <div className="w-full flex items-center justify-between p-6 m-2">
        <h1 className="text-white font-bold text-3xl">Apply Settings</h1>
        <button className=" cursor-pointer bg-green-500 text-white px-5 py-2 rounded-lg">Apply</button>
      </div>
    </div>
  );
};

export default Settings;
