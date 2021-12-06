import type { NextPage } from 'next'
import React from 'react'

import { fetchProducts } from 'api/products'
import { ProductList } from 'containers/products/ProductList'
import { IProduct } from 'types/product'

const StaticProductsPage: NextPage<{ products: IProduct[] }> = ({
  products,
}) => {
  return (
    <div>
      <h1 className="text-3xl">Statically rendered</h1>
      <p>Page is prerendered on the server with data</p>
      <ProductList products={products} />
    </div>
  )
}

//-----------------------------------------------------
// This function only run ond the server at build time
// It gets the data using API and send it on to the
// page as props
// -----------------------------------------------------
export async function getStaticProps() {
  const products = await fetchProducts()
  return { props: { products } }
}

export default StaticProductsPage
