const News = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Market News</h2>
      <div className="grid gap-4">
        <div className="bg-white p-4 rounded shadow border-l-4 border-blue-500">
          <h3 className="font-semibold text-base">ECB to raise interest rates by 25bps</h3>
          <p className="text-sm text-gray-500">Source: Reuters</p>
        </div>
        <div className="bg-white p-4 rounded shadow border-l-4 border-yellow-500">
          <h3 className="font-semibold text-base">USD strength continues amid global uncertainty</h3>
          <p className="text-sm text-gray-500">Source: Bloomberg</p>
        </div>
        <div className="bg-white p-4 rounded shadow border-l-4 border-green-500">
          <h3 className="font-semibold text-base">Oil prices decline as demand slows</h3>
          <p className="text-sm text-gray-500">Source: CNBC</p>
        </div>
        <div className="bg-white p-4 rounded shadow border-l-4 border-red-500">
          <h3 className="font-semibold text-base">Fed hints at potential policy shift in upcoming meeting</h3>
          <p className="text-sm text-gray-500">Source: Wall Street Journal</p>
        </div>
      </div>
    </div>
  );
};

export default News;
