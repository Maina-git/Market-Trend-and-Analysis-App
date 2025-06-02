
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

interface BarDataType {
  pair: string;
  confidence: number;
}

interface PieDataType {
  name: string;
  value: number;
}

const barData: BarDataType[] = [
  { pair: "EUR/USD", confidence: 72 },
  { pair: "GBP/USD", confidence: 65 },
  { pair: "USD/JPY", confidence: 78 },
];

const pieData: PieDataType[] = [
  { name: "Bullish", value: 60 },
  { name: "Bearish", value: 30 },
  { name: "Neutral", value: 10 },
];

const COLORS = ["#10B981", "#EF4444", "#F59E0B"];

const Predictions = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-green-500 mb-6">AI Market Predictions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-950 p-6 rounded shadow text-center">
          <p className="text-3xl text-white">
            EUR/USD: <span className="font-bold text-green-500">Bullish</span>
          </p>
          <p className="text-sm text-gray-300">Confidence: 72%</p>
        </div>

        <div className="bg-blue-950 p-6 rounded shadow">
          <h3 className="text-md font-medium mb-4 text-white">Sentiment Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                label>
                {pieData.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-blue-950 p-6 rounded shadow mt-6">
        <h3 className="text-md text-white font-medium mb-4">Confidence Levels</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <XAxis dataKey="pair" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Bar dataKey="confidence" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Predictions;


