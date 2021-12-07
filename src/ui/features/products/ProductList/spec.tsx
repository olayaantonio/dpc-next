import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import { makeStore } from 'store'
import { ProductList } from '.'
import { mockProducts } from 'api/products/mocks/mockProducts'

describe('<ProductList />', () => {
  it('renders the product list', () => {
    render(<ProductList products={mockProducts} />)

    expect(screen.getByText(/Fjallraven/)).toBeInTheDocument()
  })
})
