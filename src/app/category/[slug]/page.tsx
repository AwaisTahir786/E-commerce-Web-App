import ProductCard from "@/components/productCard";
import { ProductsData } from "@/utils/moke"

function getCategoryData(gender:string){
  return ProductsData.filter((product)=>product.gender===gender)
}


export default function Page({ params }: { params: { slug: string } }) {
  const result = getCategoryData(params.slug);
  return <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20 p-5 mt-20">
    {result.length>0 ? result.map((item) => (
    <ProductCard
      key={item.id}
      title={item.title}
      price={item.price}
      category={item.category}
      image={item.image}
      id={item.id}
    />
  ))  : <p className="text-xl font-bold">No Products Found</p> }
  
</div>
}

