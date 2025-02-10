import React from 'react'

const WaitingforDriver = (waitingForDriver) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => waitingForDriver(false)}>
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>

        <div className='flex items-center justify-between'>
          <img className='h-12' src='https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg'></img>
        
        <div className='text-right'>
        <h2 className='text-lg font-medium'>Sarthak</h2>
        <h4 className='text-xl font-semibold -mt-1 -mb-1'>UP 65 CH 0432</h4>
        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
        </div>
        
        </div>

      </h5>

      <div className="flex gap-2 justify-between items-center flex-col">
        
        <div className="w-full mt-5">
          {/* Pickup Location */}
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Karkariya Talab, Ahmedabad
              </p>
            </div>
          </div>

          {/* Drop-off Location */}
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">15/B Sector</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Satellite, Ahmedabad
              </p>
            </div>
          </div>

          {/* Fare Details */}
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaitingforDriver
