import { ProductsData } from '@/utils/moke';
import React from 'react'
import ProductCard from '@/components/productCard';

function ProductsPage() {
  return (
    <section className="flex flex-row justify-between mt-16 py-10">
      {ProductsData.map((item) => (
        <ProductCard
          key={item.id}
          title={item.title}
          price={item.price}
          category={item.category}
          image={item.image}
        />
      ))}
    </section>
  )
}

export default ProductsPage;