import React from 'react'
import ProductCard from './productCard';
import { ProductsData } from '@/utils/moke';
import { it } from 'node:test';

function ProductList() {

  const productsChunks=ProductsData.slice(0,3);

  return (
    <section className='lg:flex justify-evenly lg:flex-row grid md:grid-cols-2 gap-20  '>

    {
      productsChunks.map((item)=>(

        <ProductCard key={item.id} title={item.title} price={item.price} image={item.image} id={item.id} />

      ))
    }

</section>

  )
}

export default ProductList;