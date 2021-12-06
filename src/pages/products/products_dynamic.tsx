import type { NextPage } from 'next'

import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import { loadProducts, selectProducts } from 'store/products/productsSlice'
import { ProductList } from 'containers/products/ProductList'

const DynamicProductsPage: NextPage = () => {
  const dispatch = useAppDispatch()
  const { products, status } = useAppSelector(selectProducts)

  useEffect(() => {
    dispatch(loadProducts())
  }, [dispatch])

  if (!status || status === 'loading') return <div>Loading...</div>
  if (status === 'failed') return <div>Could not load products!</div>

  return (
    <div>
      <h1>Client rendered</h1>
      <p>
        This page is rendered on the server without data. Data is fetched on
        loading
      </p>
      <ProductList products={products} />
    </div>
  )
}

export default DynamicProductsPage
