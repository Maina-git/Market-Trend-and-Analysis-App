
const Overview = () => {
  const pairs = [
    { name: "EUR/USD", value: 1.13, change: "+0.25%" },
    { name: "GBP/USD", value: 1.27, change: "-0.10%" },
    { name: "USD/JPY", value: 147.8, change: "+0.12%" },
    { name: "EUR/JPY", value: 1.23, change: "+0.10%" },
    { name: "JPY/GBP", value: 1.18, change: "-0.50%" },
    { name: "USD/GBP", value: 145.9, change: "+0.02%" },
  ];

  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-green-500 mb-6">Forex Market Overview</h2>
      <div className="w-full h-[50vh] p-2 flex flex-col gap-5">
        <h1 className="text-white font-bold text-3xl">Currency Pairs</h1>
        <p className="text-xl text-white">
          Stay up-to-date with real-time forex market movements. Monitor key currency pairs, assess their performance, and
          make informed trading decisions. Our platform provides actionable insights and live updates to support both novice
          and expert forex traders.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pairs.map(({ name, value, change }) => (
          <div
            key={name}
            className="bg-blue-950 rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold text-indigo-500">{name}</h3>
              <span
                className={`text-sm font-bold ${
                  change.startsWith("+") ? "text-green-600" : "text-red-600"
                }`}>
                {change}
              </span>
            </div>
            <p className="text-4xl font-extrabold text-white">{value}</p>
            <div className="mt-4 text-gray-200 text-sm">Last updated 2 mins ago</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;






