import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="border-b-2 bg-gray-100">
      <Link href="/products/products_dynamic">
        <a className="mr-2">Client fetched product list</a>
      </Link>
      <Link href="/products/products_static">
        <a>Statically rendered product list</a>
      </Link>
      <hr />
    </div>
  );
};
