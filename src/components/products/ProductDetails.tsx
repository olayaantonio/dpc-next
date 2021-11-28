import React from 'react'

import { IProduct } from '../../types/product'

export const ProductDetails = ({ product }: { product: IProduct }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <span>ID:{product.id}</span>
    </div>
  )
}
