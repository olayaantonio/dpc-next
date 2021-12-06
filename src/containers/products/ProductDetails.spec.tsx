import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import { makeStore } from '../../store'
import { ProductDetails } from './ProductDetails'
import { mockProducts } from '../../api/products/mocks/mockProducts'

describe('<ProductDetails />', () => {
  it('renders the first product', () => {
    render(<ProductDetails product={mockProducts[0]} />)

    expect(screen.getByText(/Fjallraven/)).toBeInTheDocument()
  })
})
