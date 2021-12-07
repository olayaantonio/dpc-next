import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { fetchProducts, fetchProduct } from 'api/products'
import { IProduct } from 'types/product'
import { ProductDetails } from 'ui/features/products/ProductDetails'

const ProductPage: NextPage<{ product: IProduct }> = ({ product }) => {
  return (
    <div>
      <Head>
        <title>DPC Next Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProductDetails product={product} />
    </div>
  )
}

export async function getStaticPaths() {
  const products = await fetchProducts()

  // Get the paths we want to pre-render based on products
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const { id } = params

  const product = await fetchProduct(parseInt(id))
  return { props: { product } }
}

export default ProductPage
