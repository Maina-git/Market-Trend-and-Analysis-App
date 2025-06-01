import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const barData = [
  { pair: 'EUR/USD', confidence: 72 },
  { pair: 'GBP/USD', confidence: 65 },
  { pair: 'USD/JPY', confidence: 78 },
];

const pieData = [
  { name: 'Bullish', value: 60 },
  { name: 'Bearish', value: 30 },
  { name: 'Neutral', value: 10 },
];

const COLORS = ['#10B981', '#EF4444', '#F59E0B'];

const Predictions = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">AI Market Predictions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Prediction Summary */}
        <div className="bg-white p-6 rounded shadow text-center">
          <p className="text-lg">EUR/USD: <span className="font-bold text-green-600">Bullish</span></p>
          <p className="text-sm text-gray-500">Confidence: 72%</p>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-md font-medium mb-2">Sentiment Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-6 rounded shadow mt-6">
        <h3 className="text-md font-medium mb-2">Confidence Levels</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <XAxis dataKey="pair" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="confidence" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Predictions;
