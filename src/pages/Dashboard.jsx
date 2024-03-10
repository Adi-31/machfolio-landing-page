import React from 'react';
import Graph1 from '../assets/graph.jpg'

const Dashboard = () => {
  // data for stocks
  const stocks = [
    { symbol: 'TATASTEEL', price: 157.05, change: + 5.45 },
    { symbol: 'RELIANCE', price: 2957.00, change: - 49.00 },
    { symbol: 'BAJAJ-AUTO', price: 8875.00, change: 269.20 },
    { symbol: 'SBIN', price: 786.00, change: 2.10 },
    { symbol: 'BAJAJFINSV', price: 1584.70, change: 30.10},
    { symbol: 'ITC', price: 414.70, change: 6.85 },
    { symbol: 'INDUSINDBK', price: 1561.55, change: 7.00 },
    { symbol: 'KOTAKBANK', price: 1749.70, change: -10.05 },
    { symbol: 'TATAMOTORS', price: 1038.00, change: 20.35  },
    
  ];

  return (
    <div className="bg-black text-[#788BFF] ">
      <div className='pt-8 pl-8 md:pt-16 md:pl-8' >
      <h1 className="text-3xl md:text-4xl font-bold ">Stock Prediction Dashboard</h1></div>
      <div className="grid grid-cols-1 md:grid-cols-3 p-8 md:p-16 gap-8">
        {stocks.map((stock, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-md">
            <h2 className="text-xl md:text-2xl text-white font-semibold">{stock.symbol}</h2>
            <p className="text-lg md:text-xl text-[#BFD7FF]">Price: ₹ {stock.price}</p>
            <p className={stock.change >= 0 ? "text-green-400" : "text-red-400"}>
              Change: {stock.change >= 0 ? '' : '-'} ₹{Math.abs(stock.change)}
            </p>
          </div>
        ))}
      </div>
      {/* graph */}
      <div className="mt-20 bg-[#9BB1FF] p-8 ">
        <img src={Graph1} alt="Graph" className="w-[500px] " />
      </div>
    </div>
  );
};

export default Dashboard;
