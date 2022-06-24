import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products';
import inputFilterReducer from '../features/inputFilter';
import isLoadingReducer from '../features/isLoading';

const store = configureStore({
  reducer: {
    products: productsReducer,
    inputFilter: inputFilterReducer,
    isLoading: isLoadingReducer,
  }
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
