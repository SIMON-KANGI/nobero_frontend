import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import FilterItem from './filters/FilterItem';
import ProductsList from './ProductsList';

function Products() {
    const [products, setProducts] = useState([]);
    const [filterPriceRange, setFilterPrice] = useState([0, Infinity]);
    const [name, setName] = useState('');
    const [visibleProducts, setVisibleProducts] = useState(12);
    const [scrolling, setScrolling] = useState(false);

    const FetchProducts = useCallback(async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/products/");
            setProducts(res.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }, []);

    useEffect(() => {
        FetchProducts();
    }, [FetchProducts]);

    const FilterProducts = products.filter(product => {
        const filterPrice = product.price >= filterPriceRange[0] && product.price <= filterPriceRange[1];
        const filterName = name ? product.title.toLowerCase().includes(name.toLowerCase()) : true;
        return filterPrice && filterName;
    });

    const handleScroll = () => {
        const scrollTop = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= documentHeight - 5 && !scrolling) {
            setScrolling(true);
            setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 12);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolling]);

    useEffect(() => {
        if (scrolling) {
            setScrolling(false);
        }
    }, [scrolling]);

    return (
        <div className='flex w-screen overflow-y-auto'>
            <section className='w-1/4'>
                <FilterItem 
                    products={FilterProducts.slice(0, visibleProducts)}
                    setFilterPrice={setFilterPrice} 
                    filterPrice={filterPriceRange} 
                    setName={setName} 
                    name={name} 
                />
            </section>
            <section className='w-3/4 mr-8'>
                <ProductsList products={FilterProducts.slice(0, visibleProducts)} />
            </section>
        </div>
    );
}

export default Products;
