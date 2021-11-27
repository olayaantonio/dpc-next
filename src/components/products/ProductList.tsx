import Link from "next/link";

import { IProduct } from "../../types/product";

export const ProductList = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="border border-purple-700 rounded p-6">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
