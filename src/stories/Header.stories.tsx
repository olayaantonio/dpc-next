import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header } from '../ui/framework/Header'

export default {
  title: 'Example/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
