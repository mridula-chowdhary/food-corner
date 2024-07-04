import React from 'react'

function CategoryMenu() {
  return (
    <div className='text-center m-6'>
      <h2 className='p-6 text-2xl font-medium'> Find the best Food</h2>
      <div className='flex justify-center gap-6 '> 
        <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'> All</button>
        <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Lunch</button>
        <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>breakfast</button>
        <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Dinner</button>
        <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Snacks</button>
      </div>
    </div>
  )
}

export default CategoryMenu;

