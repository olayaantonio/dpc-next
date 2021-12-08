/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'

import { IProduct } from 'types/product'

export const ProductListItem = ({ product }: { product: IProduct }) => {
  return (
    <div key={product.id} className="group relative border rounded-lg p-6">
      <div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/products/${product.id}`}>
              <a>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.title}
              </a>
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="pl-2 text-sm font-medium text-gray-900">
          ${product.price}
        </p>
      </div>
    </div>
  )
}
