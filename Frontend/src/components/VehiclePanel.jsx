import React from 'react'
// import ConfirmRide from './ConfirmRide'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={() => props.setVehiclePanelOpen(false)}>
          <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

        {/* UberGo */}
        <div onClick={()=> {
         props.setConfirmRidePanel(true);
        }} className="flex border-2 border-gray-100 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img
            className="h-12"
            src="https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png"
            alt="UberGo"
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              UberGo <span className="inline-flex items-center"><i className="ri-user-3-fill"></i> 4</span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹193.20</h2>
        </div>

        {/* Moto */}
        <div onClick={()=> {
          props.setConfirmRidePanel(true);
        } }className="flex border-2 border-gray-100 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt="Moto"
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">Moto <span><i className="ri-user-3-fill">1</i></span></h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable, motorcycle rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹65</h2>
        </div>

        {/* UberAuto */}
        <div onClick={()=> {
          props.setConfirmRidePanel(true);
        }} className="flex border-2 border-gray-100 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between">
          <img
            className="h-12"
            src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png"
            alt="UberAuto"
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">UberAuto <span><i className="ri-user-3-fill">3</i></span></h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">Affordable auto rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹118.86</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
