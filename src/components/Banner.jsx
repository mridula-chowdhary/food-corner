import React from 'react'

function Banner() {
  return (
    <div className="relative h-[60vh]">
    <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-70"></div>
    <div className="bg-cover bg-center h-full " style={{ backgroundImage: 'url("../assets/banner3.jpg")' }}>
      <div className="h-full flex items-center justify-center text-center font-bold">
        <div>
          <h1 className="text-4xl font-bold mb-20">Order Your Favourite Food Here</h1>
          <div className='flex justify-center items-center'>
            <div className=''>
            <input type='search' name='search' id='' placeholder='Search here' autoComplete='off' className=' outline-none p-3 rounded-lg text-sm relative z-20 border border-black'></input>
            </div>
            <div>
              <button className='border border-black z-20 text-white ml-8'> Search </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner
