const News = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Market News</h2>
      <div className="grid gap-4">
        <div className="bg-blue-950 p-4 rounded shadow border-l-4 border-blue-500">
          <h3 className="font-semibold text-white text-base">ECB to raise interest rates by 25bps</h3>
          <p className="text-sm text-gray-300">Source: Reuters</p>
          <p className="text-gray-300 text-sm my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquid amet fuga!
             Molestias necessitatibus laborum voluptates, corrupti ratione voluptatibus repellat 
            illum sed rem velit, dignissimos, doloribus vel cupiditate ea a.</p>
        </div>
        <div className="bg-blue-950 p-4 rounded shadow border-l-4 border-yellow-500">
          <h3 className="font-semibold text-white text-base">USD strength continues amid global uncertainty</h3>
          <p className="text-sm text-gray-300">Source: Bloomberg</p>
          <p className="text-gray-300 text-sm my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquid amet fuga!
             Molestias necessitatibus laborum voluptates, corrupti ratione voluptatibus repellat 
            illum sed rem velit, dignissimos, doloribus vel cupiditate ea a.</p>
        </div>
        <div className="bg-blue-950 p-4 rounded shadow border-l-4 border-green-500">
          <h3 className="font-semibold text-white text-base">Oil prices decline as demand slows</h3>
          <p className="text-sm text-gray-300">Source: CNBC</p>
          <p className="text-gray-300 text-sm my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquid amet fuga!
             Molestias necessitatibus laborum voluptates, corrupti ratione voluptatibus repellat 
            illum sed rem velit, dignissimos, doloribus vel cupiditate ea a.</p>
        </div>
        <div className="bg-blue-950 p-4 rounded shadow border-l-4 border-red-500">
          <h3 className="font-semibold text-white text-base">Fed hints at potential policy shift in upcoming meeting</h3>
          <p className="text-sm text-gray-300">Source: Wall Street Journal</p>
          <p className="text-gray-300 text-sm my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquid amet fuga!
             Molestias necessitatibus laborum voluptates, corrupti ratione voluptatibus repellat 
            illum sed rem velit, dignissimos, doloribus vel cupiditate ea a.</p>
        </div>
      </div>
    </div>
  );
};

export default News;
