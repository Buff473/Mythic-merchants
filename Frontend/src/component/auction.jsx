import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './bid';

export const Auction = () => {

  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [selectedArtifact, setSelectedArtifact] = useState(null);

  const artifacts = [
    { name: "Memory Gun", image: "images/memory gun.jpeg", description: "A device capable of storing and projecting memories." },
    { name: "Dragon Balls", image: "images/dragon balls.jpeg", description: "When gathered together, the Dragon Balls summon a dragon that can fulfill virtually any wish." },
    { name: "Philosopher Stone", image: "images/stone.jpeg", description: "Can transform base metals like lead into gold or silver." },
    { name: "Journal 3", image: "images/journal.jpeg", description: "The journal contains detailed descriptions, sketches, and warnings about dangerous and otherworldly creatures." },
    { name: "Dr Fate Helmet", image: "images/dr fate helmet.jpeg", description: "The helmet grants the wearer enhanced strength, the ability to manipulate magical forces, and the power to see and alter the future." },
    { name: "Lightsaber", image: "images/lightsaber.jpg", description: "The blade is capable of cutting, burning, and melting through most substances with ease." },
    { name: "One Ring", image: "images/one ring.jpeg", description: "The One Ring, also known as the Ring of Power, is a vessel of immense and corrupting influence." },
    { name: "Excalibur", image: "images/excalibur.jpeg", description: "The sword is said to possess magical properties, including an unbreakable blade and the ability to blind enemies with its brilliance." },
    { name: "Poseidon Trident", image: "images/posiden trident.jpeg", description: "This three-pronged spear is said to command the oceans, create storms, and summon earthquakes." }
  ];

  const handleBidClick = (artifact) => {
    setSelectedArtifact(artifact);
    setOpenModal(true);
    navigate( { state: { artifact } });
  };


  const closeModal = () => {
    setOpenModal(false);
    setSelectedArtifact(null);
  };

  

  return (
    <div className="relative flex flex-col text-[#333]">
      <img
        src="images/featured bg.jpg"
        alt=""
        className="absolute bottom-0 right-0 z-[-1] w-full h-full object-cover"
      />

      <div className="flex-grow w-full pt-14 pl-4">
        <h1 className="text-5xl font-bold mb-8 text-center text-white">
          Auction </h1>

        <div className="md:grid-cols-2 md:pl-12 grid xl:grid-cols-3  text-center  gap-5">
          {artifacts.map((artifact, index) => (
            <div
              key={index}
              className="group relative w-[370px] rounded-lg overflow-hidden shadow-lg transition-all duration-300"
            >
              <img
                src={artifact.image}
                alt={artifact.name}
                className="w-[350px] h-[300px] rounded-lg object-cover"
              />
              <h2 className="text-2xl mt-4 text-center">{artifact.name}</h2>

              <p className="p-2 text-lg text-center">{artifact.description}</p>

              <div className="h-0 group-hover:h-20 transition-all duration-300 overflow-hidden">
                <button
                  className="py-2.5 px-5 w-24 bg-[#ffcc00] text-black border-none rounded-md cursor-pointer hover:bg-[#ffa700] mt-5"
                  onClick={() => handleBidClick(artifact)}
                >
                  Bid
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openModal && selectedArtifact && (
        <Modal
        open={openModal}
        artifact={selectedArtifact}
        closeModal={closeModal}
      />
      )}
    </div>
  );
};

export default Auction;
