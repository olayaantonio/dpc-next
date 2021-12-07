import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className="border-b-2 bg-gray-200  flex items-center">
      <Link href="/products/products_dynamic">
        <a className="m-2">Client fetched product list</a>
      </Link>
      <Link href="/products/products_static">
        <a className="ml-3">Statically rendered product list</a>
      </Link>
      <hr />
    </div>
  )
}
