import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ShoppingCartIcon } from '@heroicons/react/outline'

import { Button } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  children: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'Button',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  children: (
    <>
      <ShoppingCartIcon className="-ml-1 mr-2 h-5 w-5" />
      Add to cart
    </>
  ),
}
