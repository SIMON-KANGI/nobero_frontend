import { Card, CardBody } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaRupeeSign } from "react-icons/fa";
import { Spinner } from '@chakra-ui/react';

function ProductsList({ products, scrolling }) {
    if (!products || products.length === 0) {
        return <p className='text-rose-600 text-center text-xl'>No products found!</p>;
    }

    return (
        <div className="lg:grid grid-cols-4 flex flex-wrap gap-4">
            {products.map(product => (
                <Card key={product.id} className='relative'>
                    <Link to={`/product/${product.title}`} state={{product}} >
                        <CardBody>
                            <div className='relative'>
                                <img src={product.img} alt={product.title} className='w-full h-96 object-cover' />
                                <div className='absolute top-0 left-0 bg-yellow-600 px-1 py-0.5 text-white text-sm'>
                                <Link to={product.url}>
                                    Buy this item
                                </Link>
                                    
                                </div>
                                <div className='absolute bottom-6 left-6 rounded-full bg-white opacity-80 px-2 py-0.5'>
                                    <span>4.5 | 150</span>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <h2 className='text-xl font-semibold leading-7'>{product.title}</h2>
                                <div className='flex items-center font-semibold text-gray-800'>
                                    <FaRupeeSign color='gray' />
                                    {product.price}
                                    <span className='line-through px-2 text-sm text-gray-500 flex items-center'>
                                        <FaRupeeSign color='gray' />
                                        {product.MRP}
                                    </span>
                                    <span className='text-emerald-500 font-bold text-xl flex items-center'>
                                        <FaRupeeSign color='green' />
                                        400 OFF
                                    </span>
                                </div>
                                <p className='text-emerald-500 font-bold text-md'>
                                    Lowest price in last 30 days
                                </p>
                            </div>
                        </CardBody>
                    </Link>
                </Card>
            ))}
            {scrolling && (
                <div className="w-full h-full flex justify-center items-center bg-black opacity-50">
                    <Spinner size="lg" color="white" />
                </div>
            )}
        </div>
    );
}

export default ProductsList;
