import { render, screen } from '@testing-library/react'

import { ProductDetails } from '.'
import { mockProducts } from 'api/products/mocks/mockProducts'

describe('<ProductDetails />', () => {
  it('renders the first product', () => {
    render(<ProductDetails product={mockProducts[0]} />)

    expect(screen.getByText(/Fjallraven/)).toBeInTheDocument()
  })
})
