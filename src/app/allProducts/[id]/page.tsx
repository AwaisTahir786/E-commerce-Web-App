import Quantity from "@/components/quantity";
import { Button } from "@/components/ui/button";
import { ProductsData } from "@/utils/moke";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

function getProductDetails(id: string | number) {
  return ProductsData.filter((product) => product.id == id);
}

const sizes = ["XS", "S", "M", "L", "XL"];
export default function Page({ params }: { params: { id: number } }) {
  const result = getProductDetails(params.id);
  return (
    <div className="flex flex-col ">
      <div className="flex justify-center items-center">
        {/* add to cart div */}
        {result.map((item) => (
          <div key={item.id} className="flex gap-y-3 flex-col lg:flex-row  ">
            {/* Image  */}
            <div>
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={600}
              />
            </div>
            {/* content  */}
            <div className="p-5">
              <div>
                <h1 className="text-2xl ">{item.title}</h1>
                <p className="font-semibold text-base-400">{item.category}</p>
              </div>

              {/* sizes */}
              <div className="mt-8">
                <h3 className="text-sm font-bold">SELECT SIZE</h3>

                <div className="flex gap-3">
                  {sizes.map((item, index) => (
                    <div
                      className="w-8 h-8 mt-2 rounded-full flex justify-center items-center hover:shadow-xl border duration-300 "
                      key={index}
                    >
                      <span className="font-semibold text-center text-[10px] text-gray-600">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* quantity */}
              <div className="flex items-center mt-6">
                <div className="">Quantity</div>
                <Quantity />
              </div>

              {/* add to cart */}
              <div className="flex items-center gap-x-3 mt-6">
                <Button className="bg-black h-10 px-5 rounded-none">
                  <ShoppingCart className="mr-2" />
                  Start Shopping
                </Button>

                <h2 className="font-bold text-xl">{item.price}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* below div */}

      <div className="bg-green-500 p-20 mx-32 mt-20 ">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Product Information{" "}
        </h2>

        {/* below line */}
        <div className="mt-20 flex flex-row gap-x-32">


          {/* left side */}
          <div className="flex flex-col gap-y-32">
            <h2 className=" scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Product Information{" "}
            </h2>
            <h2 className=" scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Product Information{" "}
            </h2>
          </div>
            {/* Right Side */}
            <div className="flex flex-col gap-y-32">
            <p className="leading-7 [&:not(:first-child)]:mt-6">
        
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
            <h2 className=" scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Product Information{" "}
            </h2>
          </div>

        </div>

      </div>
    </div>
  );
}
