import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import { IProduct } from 'types/product'
import { Button } from 'ui/common/Button'

export const ProductDetails = ({ product }: { product: IProduct }) => {
  return (
    <div className="bg-white mt-2 p-10 flex justify-center">
      <div className="mt-6 p-10 max-w-2xl">
        <div className="w-full relative h-full ">
          <Image
            src={product.image}
            alt={product.title}
            className="object-contain"
            layout="fill"
          />
        </div>
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {product.title}
            </h1>
          </div>
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">${product.price}</p>
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={`'h-5 w-5 flex-shrink-0' ${
                        Math.floor(product.rating.rate) > rating
                          ? 'text-gray-900'
                          : 'text-gray-200'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating.rate} out of 5 stars</p>
                <a className="ml-3 text-sm font-medium text-gray-600 hover:text-indigo-500">
                  {product.rating.count} reviews
                </a>
              </div>
            </div>
            <Button className="mt-10" size="large" primary label="Add to bag" />
          </div>
          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <div>
              <h3 className="sr-only">Description</h3>

              <p className="text-base text-gray-900">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
