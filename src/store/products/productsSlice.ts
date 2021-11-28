import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState } from '../../store'
import { fetchProducts } from '../../api/products'
import { IProduct } from '../../types/product'

export interface ProductsState {
  products: IProduct[]
  status: 'idle' | 'loading' | 'failed'
}

const initialState: ProductsState = {
  products: [],
  status: 'idle',
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const loadProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await fetchProducts()
    // The value we return becomes the `fulfilled` action payload
    return response
  },
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: {
    [loadProducts.pending.type]: (state) => {
      state.status = 'loading'
    },
    [loadProducts.fulfilled.type]: (state, action) => {
      state.status = 'idle'
      state.products = action.payload
    },
  },
})

//export const {} = productsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectProducts = (state: AppState) => state.products

export default productsSlice.reducer
