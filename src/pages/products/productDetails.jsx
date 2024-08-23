import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import { FaRupeeSign } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
function ProductsDetails() {
    const location = useLocation()
    const { state } = location;
    const product = state?.product;

  
  return (
    <div className='container ml-8 my-4'>
    <nav className='ml-8 my-4'>
    <Breadcrumb separator={<FaChevronRight color='gray' /> }>
  <BreadcrumbItem>
    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <Link href='#' className='text-gray-400'>{product.title}</Link>
  </BreadcrumbItem>
</Breadcrumb>
    </nav>
    <div className='ml-8 flex'>
        <img src={product.img} alt={product.title} className='max-h-screen' />
        <section className='mx-4'>
<h1 className='text-2xl font-bold'>{product.title}</h1>
<div className='flex'>
    <h2 className='text-3xl flex items-center font-bold text-gray-700'>
<FaRupeeSign/>
{product.price.slice(0,4)}</h2>
<h3 className='flex items-center text-emerald-500 font-bold text-xl'>
<FaRupeeSign/>
{product.MRP - product.price} OFF
</h3>
</div>
<p className='text-gray-500 text-xl flex items-center'>MRP: <span className='line-through flex items-center mr-4'>
<FaRupeeSign/>
{product.MRP} </span> inclusive of all Taxes</p>
<p className='font-bold text-rose-600 flex items-center'>
<span className='mx-2'><FaCartArrowDown/></span>

 604 people bough this ibn last 7 days</p> 
 <div className='flex'>
      <div className='bg-yellow-100 rounded-lg px-4 py-2 my-3 mx-3 w-fit border flex'>
      <img src="https://nobero.com/cdn/shop/t/199/assets/discount-icon.svg?v=77470898015760174531683282823" width="30px"/>
      <div className='mx-1'> 
      <p className='text-md font-semibold'>Flat ₹250 OFF (Use code: WK250)</p> 
      <span className='text-sm'>On min. purchase of ₹1500. Weekend Only!</span>
      </div>
    
         
     
      </div>
      <div className='bg-yellow-100 rounded-lg px-4 py-2 my-3 w-fit border flex'>
      <img src="https://nobero.com/cdn/shop/t/199/assets/discount-icon.svg?v=77470898015760174531683282823" width="30px"/>
      <div className='mx-1'>
           <p className='text-md font-semibold'>Pick Any 2 Tees at ₹999</p>
          <span className='text-sm'>No code required Hurry!</span>
      </div>
   
      </div>
     
      </div>
      <div>
        <h1 className='text-2xl font-bold'>Select Color</h1>
        <div className='flex gap-2 my-4'>
            <img src={product.img} className="h-32 w-24"/>
            <img src={product.img} className='w-24 h-32'/>
            <img src={product.img} className='w-24 h-32'/>
            <img src={product.img} className='w-24 h-32'/>
            <img src={product.img} className='w-24 h-32'/>
            <img src={product.img} className='w-24 h-32'/>
            <img src={product.img} className='w-24 h-32'/>
        </div>
      </div>
      <div>
        <h1 className='text-2xl font-bold'>Select Size</h1>
        <div className='flex gap-2 my-4'>
            <button className='rounded-full w-36 h-12  bg-transparent border-2'>S</button>
            <button className='rounded-full w-36 h-12  bg-transparent border-2'>M</button>
            <button className='rounded-full w-36 h-12  bg-transparent border-2'>L</button>
            <button className='rounded-full w-36 h-12  bg-transparent border-2'>XL</button>
            <button className='rounded-full w-36 h-12  bg-transparent border-2'>XXL</button>
            <button className='rounded-full w-36 h-12  bg-transparent border-2'>XXXL</button>
        </div>
      </div>
      <div className='bg-yellow-100 py-3'>
      <h1 className='text-center'>Lowest price in last <span>30 days</span></h1></div>
      <button className='w-full rounded-full bg-purple-900 text-white text-xl my-3 py-4'>
      <Link to={product.url}>Buy Product</Link></button>
      <img src="https://nobero.com/cdn/shop/files/trust_banner_2.svg?v=1680263466" className='w-full my-5'/>
      <div>
        <p className='font-medium'>
            {product.description}
        </p>
      </div>
        </section>   
      
    </div>
   
    </div>
  )
}

export default ProductsDetails
