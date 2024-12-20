import React from 'react'
import { ReactTyped } from "react-typed";

const hero = () => {
  return (
    <div>
        

      <div className='flex items-center justify-center text-center h-screen'>

          <div class="hero-content max-w-[600px]">

          <img src="images/background.jpg" alt='' className='absolute bottom-0 right-0 z-[-1] w-full h-full object-cover'/>

        <div className='max-w-[600px] px-4'>
          
            <h1 className='text-6xl mb-5 font-bold'>Welcome to Mythic Merchants</h1>

          <div className=' max-sm:w-[300px] max-sm:text-base text text-white mb-14 font-bold text-2xl w-[500px] m-auto'>
              <ReactTyped
            strings={[
              'Explore artifacts and relics from realms beyond imagination',
            ]}
            typeSpeed={60}
            backSpeed={100}
            loop
          />
         </div>  
            <button className="bg-[#ffcc00] no-underline text-[#111] py-2.5 px-5 font-bold rounded-md hover:bg-[#ffa700]"><a href="#featured" >Enter the Bazaar</a></button>
            
            </div>
        </div>
      </div>

        <div id='featured' className='w-full py-20 text-center text-[#000] '>

            <h2 className='text-4xl mb-8 text-[#333] font-bold'>Featured Items</h2>

            <div className="max-sm:grid-cols-1 md:grid-cols-2 md:pl-12 grid xl:grid-cols-3  text-center gap-5 ">

              <div className="group relative w-[370px] rounded-lg overflow-hidden shadow-lg transition-all duration-300">
                <img src="images/cursed compass.jpg" alt='' className='w-[200px] h-[200px] rounded-lg m-auto' ></img>
                <h3 className='text-2xl my-2.5 mx-0'>Cursed Compass</h3>
                <p className='text-3.5'> Points anywhere but where you want to go</p>
                <a href="/Auction"><button className='py-2.5 px-5 bg-[#ffcc00] text-black border-none rounded-md cursor-pointer transition-[0.3] hover:bg-[#ffa700] mt-5'>Discover More</button></a>
              </div>

              <div className="group relative w-[370px] rounded-lg overflow-hidden shadow-lg transition-all duration-300">
                <img src="images/omnirix.jpeg" alt='' className='w-[200px] h-[200px] rounded-lg m-auto'></img>
                <h3 className='text-2xl my-2.5 mx-0'>Omnitrix</h3>
                <p className='text-3.5 px-10'> allows its user to access the unique powers of countless alien species</p>
                <a href="/Auction"><button className='py-2.5 px-5 bg-[#ffcc00] text-black border-none rounded-md cursor-pointer transition-[0.3] hover:bg-[#ffa700] mt-5'>Discover More</button></a>
              </div>

              <div className="group relative w-[370px] rounded-lg overflow-hidden shadow-lg transition-all duration-300">
                <img src="images/inifinity gauntlet.jpeg" alt='' className='w-[200px] h-[200px] rounded-lg m-auto' ></img>
                <h3 className='text-2xl my-2.5 mx-0'>Infinity Gauntlet</h3>
                <p className='text-3.5'>A single snap can change the universe</p>
                <a href="/Auction"><button className='py-2.5 px-5 bg-[#ffcc00] text-black border-none rounded-md cursor-pointer transition-[0.3] hover:bg-[#ffa700] mt-5'>Discover More</button></a>
              </div>
            </div>
          </div>

        

     </div>  

      );
    };
    
    export default hero;

