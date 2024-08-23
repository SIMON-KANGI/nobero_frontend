import React from 'react'
import FilterPrice from './FilterPrice'

function FilterItem({setFilterPrice, setName, filterPrice, clearFilter}) {
  return (
    <div className='w-full'>
    <div className='justify-between items-center flex py-8'>
        <h1 className='text-2xl font-bold'>Filter</h1>
        <button onClick={clearFilter} className='text-xl text-yellow-600 font-bold'>Clear All</button>
    </div>
    <hr/>
      <FilterPrice setFilterPrice={setFilterPrice} filterPrice={filterPrice}/>
    </div>
  )
}

export default FilterItem
