const Overview = () => {
  const pairs = [
    { name: "EUR/USD", value: 1.13, change: "+0.25%" },
    { name: "GBP/USD", value: 1.27, change: "-0.10%" },
    { name: "USD/JPY", value: 147.8, change: "+0.12%" },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-indigo-800 mb-6">🌍 Forex Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pairs.map(({ name, value, change }) => (
          <div
            key={name}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold text-indigo-700">{name}</h3>
              <span
                className={`text-sm font-bold ${
                  change.startsWith("+") ? "text-green-600" : "text-red-600"
                }`}
              >
                {change}
              </span>
            </div>
            <p className="text-4xl font-extrabold text-gray-900">{value}</p>
            <div className="mt-4 text-gray-500 text-sm">Last updated 2 mins ago</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
