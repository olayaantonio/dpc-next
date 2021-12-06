import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProductList } from './ProductList'
import { mockProducts } from '../../../api/products/mocks/mockProducts'

console.log(mockProducts)

export default {
  title: 'Products/ProductList',
  component: ProductList,
} as ComponentMeta<typeof ProductList>

const Template: ComponentStory<typeof ProductList> = (args) => (
  <ProductList {...args} />
)

export const WithProducts = Template.bind({})
WithProducts.args = {
  products: mockProducts,
}

export const Empty = Template.bind({})
Empty.args = {
  products: [],
}
