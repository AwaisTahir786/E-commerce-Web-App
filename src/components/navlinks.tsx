import React from "react";
import Link from "next/link";

function NavLinks() {
  return (
    <>
      <ul className="flex flex-row gap-x-10">
        <li className="text-xl">
          <Link href="/female">Female</Link>
        </li>
        <li className="text-xl">
          <Link href="/male">Male</Link>
        </li>
        <li className="text-xl">
          <Link href="/kids">Kids</Link>
        </li>
        <li className="text-xl">
          <Link href="/allProducts">All Products</Link>
        </li>
      </ul>
    </>
  );
}
export default NavLinks;
