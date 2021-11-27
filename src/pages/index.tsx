import { NextPage } from "next";

import { fetchProducts } from "../api/products";
import { IProduct } from "../types/product";

const IndexPage: NextPage<{ products: IProduct[] }> = ({ products }) => {
  return (
    <div className="flex h-screen">
      <div className="text-white m-auto">
        <h1>DPC Boilerplate for NextJS Projects</h1>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const products = await fetchProducts();
  return { props: { products } };
}

export default IndexPage;
