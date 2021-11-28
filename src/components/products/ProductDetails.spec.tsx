import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import { makeStore } from '../../store'
import { ProductDetails } from './ProductDetails'
import { mockProducts } from '../../api/products/mocks/mockProducts'

describe('<ProductDetails />', () => {
  it('renders the first product', () => {
    const store = makeStore()

    render(
      <Provider store={store}>
        <ProductDetails product={mockProducts[0]} />
      </Provider>,
    )

    expect(screen.getByText(/Fjallraven/)).toBeInTheDocument()
  })
})
