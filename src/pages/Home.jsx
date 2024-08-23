import React from 'react'
import Products from './products/Products'

function Home() {
  return (
    <div>
      <section className='w-screen'>
        <img src="https://nobero.com/cdn/shop/files/T2.webp?v=1719039380"/>
      </section>
      <section className='container mx-16'>
        <Products/>
      </section>
    </div>
  )
}

export default Home
