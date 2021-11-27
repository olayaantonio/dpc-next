import { rest } from "msw";
import { mockProducts } from "./mockProducts";

const handlers = [
  rest.get(
    process.env.NEXT_PUBLIC_API_BASE_URL + "/api/products",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.delay(1000), ctx.json(mockProducts));
    }
  ),
  rest.get(
    process.env.NEXT_PUBLIC_API_BASE_URL + "/api/products/:id",
    (req, res, ctx) => {
      const mockProduct = mockProducts.find(
        (product) => product.id === parseInt(req.params.id)
      );
      if (!mockProduct) {
        return res(ctx.status(404));
      }
      return res(ctx.status(200), ctx.delay(1000), ctx.json(mockProduct));
    }
  ),
];

export default handlers;
