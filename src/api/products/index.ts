import { IProduct } from '../../types/product'

export async function fetchProducts(): Promise<IProduct[]> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + '/api/products',
  )
  const result: IProduct[] = await response.json()

  return result
}

export async function fetchProduct(id: number): Promise<IProduct> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + '/api/products/' + id.toString(),
  )
  const result: IProduct = await response.json()

  return result
}
