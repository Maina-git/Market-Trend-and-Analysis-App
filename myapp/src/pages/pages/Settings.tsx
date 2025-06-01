import { useState } from 'react';

const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);
  const [timezone, setTimezone] = useState('UTC');

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-md max-w-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Settings</h2>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <label htmlFor="timezone" className="block mb-2 font-medium text-gray-700">
          Timezone
        </label>
        <select
          id="timezone"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option>UTC</option>
          <option>GMT</option>
          <option>EAT</option>
          <option>EST</option>
          <option>PST</option>
          <option>IST</option>
        </select>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <label className="block mb-2 font-medium text-gray-700">Theme</label>
        <div className="flex items-center space-x-6">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === 'light'}
              onChange={() => setTheme('light')}
              className="form-radio"
            />
            <span>Light</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === 'dark'}
              onChange={() => setTheme('dark')}
              className="form-radio"
            />
            <span>Dark</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="theme"
              value="system"
              checked={theme === 'system'}
              onChange={() => setTheme('system')}
              className="form-radio"
            />
            <span>System</span>
          </label>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="font-medium text-gray-700">Enable Notifications</span>
        </label>
        <p className="text-sm text-gray-500 mt-1">
          Receive alerts for major market movements and updates.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <label className="block mb-2 font-medium text-gray-700" htmlFor="dataRefresh">
          Data Refresh Interval (minutes)
        </label>
        <input
          type="number"
          id="dataRefresh"
          min={1}
          max={60}
          defaultValue={5}
          className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <p className="text-sm text-gray-500 mt-1">
          Set how often market data updates automatically.
        </p>
      </div>
    </div>
  );
};

export default Settings;
