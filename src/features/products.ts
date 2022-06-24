import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
}

interface ProductsState {
  data: Product[];
  pages: {
    current: number;
    perPage: number;
    total: number;
    totalPages: number;
  } | null;
}

const initialState: ProductsState = {
  data: [],
  pages: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state: ProductsState, action: PayloadAction<ProductsState>) {
      state.data = action.payload.data;
      state.pages = action.payload.pages;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
