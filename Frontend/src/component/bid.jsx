import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const formatCurrency = (value) => {
  const cleanedValue = value.replace(/[^\d.-]/g, '');
  if (!cleanedValue || isNaN(cleanedValue)) return '';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cleanedValue);
};

const BidPage = ({ open, artifact, closeModal }) => {
  const [bidAmount, setBidAmount] = useState('');
  const navigate = useNavigate();

  // Lock scroll when the modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open || !artifact) return null;

  const handleBidChange = (e) => {
    const value = e.target.value;
    setBidAmount(value);
  };

  const handlePlaceBid = () => {
    if (!bidAmount || bidAmount === '') {
      alert('Please enter a valid bid');
      return;
    }

    const existingBids = JSON.parse(localStorage.getItem('bids')) || [];
    const existingBidIndex = existingBids.findIndex(bid => bid.artifact === artifact.name);
    const newBidAmount = parseFloat(bidAmount.replace(/[^0-9.-]+/g, ''));

    if (existingBidIndex !== -1) {
      const currentHighestBid = parseFloat(existingBids[existingBidIndex].highestBid.replace(/[^0-9.-]+/g, ''));
      if (newBidAmount > currentHighestBid) {
        existingBids[existingBidIndex].highestBid = bidAmount;
      } else {
        alert('Your bid must be higher than the current bid.');
        return;
      }
    } else {
      const newBid = {
        artifact: artifact.name,
        image: artifact.image,
        highestBid: bidAmount,
      };
      existingBids.push(newBid);
    }

    localStorage.setItem('bids', JSON.stringify(existingBids));
    closeModal();
    navigate('/allbids');
  };

  return (
    <div className="overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div onClick={closeModal} className="absolute inset-0"></div>
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative bg-white w-[600px] h-[650px] p-0 rounded-2xl max-sm:scale-75"
      >
        <button
          className="absolute top-5 right-5 text-4xl font-bold text-black hover:text-red-700"
          onClick={closeModal}
        >
          ×
        </button>

        <div className="p-5">
          <h1 className="text-3xl font-bold text-center text-black mb-5">Bid on Item</h1>
          <div className="flex flex-col justify-center items-center">
            {artifact.image && (
              <img src={artifact.image} alt='' className="w-[350px] h-[300px] rounded-lg" />
            )}
            <div className="ml-5">
              <h2 className="text-2xl text-black mt-5 text-center">{artifact.name}</h2>
              <p className="text-lg text-black mt-2 px-20 max-sm:px-10 text-center">
                {artifact.description}
              </p>
              <div className="mt-10 text-center max-sm:text-left">
                <input
                  type="text"
                  placeholder="Enter your bid"
                  value={bidAmount}
                  onChange={handleBidChange}
                  onBlur={() => setBidAmount(formatCurrency(bidAmount))}
                  onFocus={() => setBidAmount(bidAmount.replace(/[^0-9.-]+/g, ''))}
                  className="p-2 border border-gray-300 rounded-md text-black max-sm:w-[200px]"
                />
                <button
                  className="ml-2 py-2 px-4 bg-[#ffcc00] text-black rounded-md hover:bg-[#ffa700]"
                  onClick={handlePlaceBid}
                >
                  Place Bid
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidPage;
