import React from "react";
import ProductCard from "@/components/productCard";
import { ProductsData } from "@/utils/moke";

function FemalePage() {
  return (
    <section className="lg:flex justify-evenly lg:flex-row grid md:grid-cols-2 gap-20  ">
      {ProductsData.map((item) => (
        <ProductCard
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
        />
      ))}
    </section>
  );
}

export default FemalePage;
