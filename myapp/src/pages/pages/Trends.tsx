import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const dataSets = {
  daily: [
    { label: 'Mon', price: 1.10 },
    { label: 'Tue', price: 1.11 },
    { label: 'Wed', price: 1.09 },
    { label: 'Thu', price: 1.13 },
    { label: 'Fri', price: 1.12 }
  ],
  monthly: [
    { label: 'Jan', price: 1.10 },
    { label: 'Feb', price: 1.08 },
    { label: 'Mar', price: 1.12 },
    { label: 'Apr', price: 1.14 },
    { label: 'May', price: 1.11 }
  ],
  yearly: [
    { label: '2020', price: 1.18 },
    { label: '2021', price: 1.21 },
    { label: '2022', price: 1.15 },
    { label: '2023', price: 1.10 },
    { label: '2024', price: 1.13 }
  ]
};

const Trends = () => {
  const [timeframe, setTimeframe] = useState<'daily' | 'monthly' | 'yearly'>('daily');
  const trendData = dataSets[timeframe];

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-indigo-700">📈 Forex Trends</h2>
        <div className="space-x-2">
          {(['daily', 'monthly', 'yearly'] as const).map((option) => (
            <button
              key={option}
              onClick={() => setTimeframe(option)}
              className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
                timeframe === option ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700'
              }`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-inner mb-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="label" tick={{ fill: '#4B5563', fontSize: 12 }} />
            <YAxis domain={['auto', 'auto']} tick={{ fill: '#4B5563', fontSize: 12 }} />
            <Tooltip contentStyle={{ backgroundColor: '#f9fafb', borderColor: '#d1d5db' }} />
            <Line type="monotone" dataKey="price" stroke="#6366F1" strokeWidth={3} dot={{ r: 5, stroke: '#4F46E5', strokeWidth: 2, fill: '#EEF2FF' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-inner">
        <h3 className="text-lg font-semibold text-indigo-700 mb-4">📊 Price Overview (Bar Chart)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="label" tick={{ fill: '#4B5563', fontSize: 12 }} />
            <YAxis domain={['auto', 'auto']} tick={{ fill: '#4B5563', fontSize: 12 }} />
            <Tooltip contentStyle={{ backgroundColor: '#f9fafb', borderColor: '#d1d5db' }} />
            <Bar dataKey="price" fill="#6366F1" barSize={30} radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Trends;
