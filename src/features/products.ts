import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { filterProducts } from '../common/FilterProducts';


export interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
  isFiltered?: boolean;
}

interface ProductsState {
  data: Product[];
  pages: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  }
};

interface FilterByProducts {
  products: Product[];
  filterBy?: number;
}

const initialState: ProductsState = {
  data: [],
  pages: {
    page: 0,
    perPage: 0,
    total: 0,
    totalPages: 0,
  }
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

    setProducts(state: ProductsState, action: PayloadAction<ProductsState>) {
      state.data = action.payload.data;
      state.pages = action.payload.pages
    },
    filterByProducts(state: any, action: PayloadAction<FilterByProducts>) {

      const filteredProducts = filterProducts({
        products: action.payload.products,
        value: action.payload.filterBy
      });

      state.data = filteredProducts;
    },

  },
});

export const { setProducts, filterByProducts } = productsSlice.actions;
export default productsSlice.reducer;
