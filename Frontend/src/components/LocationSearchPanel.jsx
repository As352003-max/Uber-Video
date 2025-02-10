import React from "react";

const LocationSearchPanel = ({ setVehiclePanelOpen, setPanelOpen }) => {
  const locations = [
    "CGH Campus Sadar Bazar Cantt Varanasi",
    "Varanasi Cantt Station",
    "Unit Run Canteen Cantt",
    "Banaras Hindu University Lanka",
  ];

  return (
    <div>
      {/* This is just sample data */}
      {locations.map((elem, index) => (
        <div
          key={index}
          onClick={() => {
            setVehiclePanelOpen(true);
            setPanelOpen(false);
          }}
          className="flex items-center border-2 p-3 border-gray-50 active:border-black rounded-xl gap-4 my-2 justify-start"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill text-xl"></i>
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
