import React, { useState, useEffect } from 'react';

const Bids =()=>{

const [bids, setBids] = useState([]);

  // Function to handle placing a bid
  const PlaceBid = (artifact, newBidAmount) => {
    const parsedNewBidAmount = parseFloat(newBidAmount.replace(/[^\d.-]/g, ''));

    if (isNaN(parsedNewBidAmount) || parsedNewBidAmount <= 0) {
      alert('Please enter a valid bid amount.');
      return;
    }

    // Check if this artifact already has a bid placed
    const existingBidIndex = bids.findIndex(bid => bid.artifact === artifact.name);

    if (existingBidIndex !== -1) {
      // If a bid already exists, check if the new bid is greater than the current highest bid
      const currentHighestBid = bids[existingBidIndex].highestBid;
      const parsedCurrentBid = parseFloat(currentHighestBid.replace(/[^\d.-]/g, ''));

      if (parsedNewBidAmount > parsedCurrentBid) {
        // Update the highest bid for this artifact
        const updatedBids = [...bids];
        updatedBids[existingBidIndex] = {
          ...updatedBids[existingBidIndex],
          highestBid: newBidAmount,
        };
        setBids(updatedBids);
        localStorage.setItem('bids', JSON.stringify(updatedBids)); // Save to localStorage
      } else {
        alert('Your bid must be higher than the current bid.');
      }
    } else {
      // If no bid exists for the artifact, add the new bid
      const newBid = {
        artifact: artifact.name,
        highestBid: newBidAmount,
        image: artifact.image,
      };
      const updatedBids = [...bids, newBid];
      setBids(updatedBids);
      localStorage.setItem('bids', JSON.stringify(updatedBids)); // Save to localStorage
    }
  };

  // Retrieve bids from localStorage on initial load
  useEffect(() => {
    const savedBids = localStorage.getItem('bids');
    if (savedBids) {
      setBids(JSON.parse(savedBids)); // Set bids from localStorage if they exist
    }
  }, []);

}

export default Bids