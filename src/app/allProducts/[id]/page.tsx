import { ProductsData } from "@/utils/moke"
import Image from "next/image";

function getProductDetails(id:string | number ){
  return ProductsData.filter((product)=>product.id==id)
}


export default function Page({ params }: { params: { id: number } }) {
  const result = getProductDetails(params.id);
  console.log(result);

  return <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20 p-5 mt-20">
    {result.map((item) => (

<div key={item.id}>

{/* Image  */}
      <div>
        <Image src={item.image} alt={item.title} width={500} height={500} />
      </div>
      <div>
        <p>{item.category}</p>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <p>{item.gender}</p>
        <p>{item.id}</p>


      </div>

</div>
      
   
  ))  }
  
</div>
}

