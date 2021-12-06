import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProductDetails } from './ProductDetails'
import { mockProducts } from '../../../api/products/mocks/mockProducts'

export default {
  title: 'Products/ProductDetails',
  component: ProductDetails,
} as ComponentMeta<typeof ProductDetails>

const Template: ComponentStory<typeof ProductDetails> = (args) => (
  <ProductDetails {...args} />
)

export const Default = Template.bind({})
Default.args = {
  product: mockProducts[0],
}
