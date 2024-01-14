import { StaticImageData } from "next/image"

export type Products={
    id:number,
    title:string,
    price:string,
    category: string;
    image: string | StaticImageData

}