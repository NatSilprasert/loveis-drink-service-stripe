"use client"

import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { useAppContext } from '@/context/AppContext';

const Product = () => {

    const { products } = useAppContext();

    const [activeCategory, setActiveCategory] = useState('signature');

    return (
        <div className='mt-4'>
            <div className='flex gap-8 justify-center'>
                <div className='flex flex-col items-center'>
                    <button onClick={() => setActiveCategory('signature')} className={`${activeCategory === 'signature' ? 'text-black font-semibold' : 'text-gray-500'} flex-1 text-center font-medium py-2`}>SIGNATURE</button>
                    <hr className={`${activeCategory === 'signature' ? 'border-black' : 'border-white'} w-4/5 border-b`}/>
                </div>
                <div className='flex flex-col items-center'>
                    <button onClick={() => setActiveCategory('coffee')} className={`${activeCategory === 'coffee' ? 'text-black font-semibold' : 'text-gray-500'} flex-1 text-center font-medium py-2`}>COFFEE</button>
                    <hr className={`${activeCategory === 'coffee' ? 'border-black' : 'border-white'} w-4/5 border-b`}/>
                </div>
                <div className='flex flex-col items-center'>
                    <button onClick={() => setActiveCategory('non-coffee')} className={`${activeCategory === 'non-coffee' ? 'text-black font-semibold' : 'text-gray-500'} flex-1 text-cent-medium py-2`}>NON-COFFEE</button>
                    <hr className={`${activeCategory === 'non-coffee' ? 'border-black' : 'border-white'} w-4/5 border-b`}/>
                </div>
            </div>
            <hr className='w-full border-gray-400/50'/>
            <div className='mt-6 mx-4 md:mx-8 lg:mx-54'>
                <p className='font-semibold text-2xl mb-4'>{activeCategory}</p>
                <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {products.map((product, index) => {
                        if (activeCategory === 'signature') {
                            return product.signature ? <ProductCard key={index} product={product}/> : null;
                        } else {
                            return product.category === activeCategory ? <ProductCard key={index} product={product}/> : null;
                        }
                    })}
                </section>
            </div>
            <hr className='mt-16 text-gray-400/50'/>
        </div>
    )
}

export default Product
