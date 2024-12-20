import React, { useEffect, useState } from 'react';

  const AllBidsPage = () => {
    const [bids, setBids] = useState([]);
  
    useEffect(() => {
      const storedBids = JSON.parse(localStorage.getItem('bids')) || [];
      setBids(storedBids);
    }, []);
  
  return (
    <div className="mt-10 text-black px-5">
      <h1 className="text-3xl text-center font-bold mb-5">All Placed Bids</h1>
      <div className="flex justify-center gap-10 items-center flex-wrap">
        {bids.length === 0 ? (
          <div className="text-center mt-20">
            <p className="text-xl font-semibold">No bids have been placed yet.</p>
            <p className="text-gray-500 mt-2">Be the first to bid on an artifact!</p>
          </div>
        ) : (
          bids.map((bid, index) => (
            <div
              key={index}
              className="w-[280px] p-4 mb-5 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
            >
              <img
                src={bid.image}
                alt=''
                className="w-full h-[230px] object-cover rounded-lg"
              />
              <h2 className="text-2xl mt-4 text-center font-semibold">{bid.artifact}</h2>
              <p className="text-lg text-center mt-5">
                <span className="text-red-500 font-medium">Highest Bid:</span> <br />
                {bid.highestBid}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllBidsPage;




