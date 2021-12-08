import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProductListItem } from '.'
import { mockProducts } from '../../../../api/products/mocks/mockProducts'

export default {
  title: 'Products/ProductListItem',
  component: ProductListItem,
} as ComponentMeta<typeof ProductListItem>

const Template: ComponentStory<typeof ProductListItem> = (args) => (
  <ProductListItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  product: mockProducts[0],
}
