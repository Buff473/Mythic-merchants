import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Lock scroll when the sidebar is visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup when the component unmounts or the sidebar is closed
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="relative sm:hidden">
        <div className="bg-white justify-center h-20">
          <img
            src="images/Mythic merchant logo.jpg"
            alt=""
            className="bg-transparent h-20 float-right"
          ></img>

          <i
            className="fa fa-bars text-4xl text-black ml-5 mt-5"
            onClick={handleClick}
          ></i>
        </div>

        {isVisible && (
          <div className="sidebar">
            <div className="absolute bg-red-950 w-full h-screen m-0 transition-all z-[10]">
              <ul className="mt-10">
                <li className="li">
                  <a href="/" className="w-full pr-[0px]">
                    <i className="fa fa-home float-left pt-8 pl-10 mr-10 text-4xl text-black"></i>{' '}
                    Home
                  </a>
                </li>
                <li className="li">
                  <a href="/Auction" className="w-full pr-[80px]">
                    <i className="fa fa-gavel float-left pt-9 pl-10 mr-10 text-black"></i>{' '}
                    Auction
                  </a>
                </li>
                <li className="li">
                  <a href="/allbids" className="pr-[80px]">
                    <i className="fa fa-money float-left pt-9 ml-1 pl-10 mr-10 text-black"></i>{' '}
                    Bids
                  </a>
                </li>
                <li className="li">
                  <a href="/about" className="w-full pr-[80px]">
                    <i className="fa fa-info-circle float-left pt-9 pl-10 mr-10 ml-1 text-black"></i>{' '}
                    About
                  </a>
                </li>
                <li className="li">
                  <a href="/login" className="w-full pr-[80px]">
                    <i className="fa fa-sign-out float-left pt-9 pl-10 mr-10 ml-1 text-black"></i>{' '}
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="header max-sm:hidden h-24 text-black flex justify-between items-center px-5 py-2.5 bg-[#fff] border-b-violet-950">
        <div className="flex flex-row text-center">
          <img
            src="images/Mythic merchant logo.jpg"
            alt=""
            className="bg-transparent h-24"
          ></img>

          <nav>
            <ul className="max-sm:space-x-12 flex space-x-8 items-center h-full">
              <li>
                <a href="/" className="atext">
                  Home
                </a>
              </li>
              <li>
                <a href="/Auction" className="atext">
                  Auction
                </a>
              </li>
              <li>
                <a href="/allbids" className="atext">
                  Bids
                </a>
              </li>
              <li>
                <a href="/about" className="atext">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="relative max-sm:hidden">
          <i
            className="fa fa-user-circle text-3xl cursor-pointer right-0 mr-10"
            onClick={handleClick}
          ></i>

          {isVisible && (
            <ul className="absolute bg-black w-28 h-20 mt-4 right-0 rounded-2xl text-center">
              <li className="list-none py-3 pt-5">
                <Link to="/login" className="text-white">
                  <i className="fa fa-sign-out text-xl text-white pr-2"></i>
                  Log out
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
