import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { makeStore } from "../../store";
import { ProductList } from "./ProductList";
import { mockProducts } from "../../api/products/mocks/mockProducts";

describe("<ProductList />", () => {
  it("renders the product list", () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <ProductList products={mockProducts} />
      </Provider>
    );

    expect(screen.getByText(/Fjallraven/)).toBeInTheDocument();
  });
});
