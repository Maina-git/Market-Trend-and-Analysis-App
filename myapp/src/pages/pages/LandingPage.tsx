import { motion } from "framer-motion";
const theme = {
  gradient: "from-indigo-500 via-blue-500 to-green-500",
  primary: "text-green-500",
  bg: "bg-gray-950",
};
function LandingPage() {
  const forexNews = [
    {
      title: "USD Rises as Inflation Concerns Grow",
      content: "The US Dollar saw gains after the Federal Reserve hinted at possible rate hikes to combat rising inflation.",
    },
    {
      title: "EUR/USD Dips Below 1.09",
      content: "The Euro weakened as German factory orders fell more than expected.",
    },
  ];

  const marketTrends = [
    {
      pair: "EUR/USD",
      trend: "Bearish",
      price: "1.0883",
    },
    {
      pair: "GBP/USD",
      trend: "Bullish",
      price: "1.2765",
    },
    {
      pair: "USD/JPY",
      trend: "Bullish",
      price: "139.25",
    },
  ];

  return (
    <div className={`${theme.bg} min-h-screen p-6 text-white font-sans`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to Forex Vision</h1>
          <p className="text-gray-400">Live insights and market trends from the world of forex trading</p>
        </div>
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Live Forex Market Trends</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {marketTrends.map((trend, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800 p-4 rounded-xl shadow-md">
                <h3 className="text-xl font-bold">{trend.pair}</h3>
                <p className="text-gray-300">Trend: <span className="font-semibold">{trend.trend}</span></p>
                <p className="text-gray-400">Current Price: {trend.price}</p>
              </motion.div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Latest Forex News</h2>
          <div className="space-y-4">
            {forexNews.map((news, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 p-4 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-1">{news.title}</h3>
                <p className="text-gray-300">{news.content}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="flex justify-center gap-4 mt-6">
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl">
            See Portfolio
          </button>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl">
            Choose Your Preference
          </button>
        </div>
      </motion.div>
    </div>
  );
}
export default LandingPage;









