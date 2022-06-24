import { createContext } from 'react';
import { Paginator, Product } from './types';

interface IGlobalContext {
  products: {
    get: Product[] | null;
    set: React.Dispatch<React.SetStateAction<Product[]>> | null;
  };
  paginator: {
    get: Paginator | null;
    set: React.Dispatch<React.SetStateAction<Paginator>> | null;
  };
  isLoading: {
    get: boolean;
    set: React.Dispatch<React.SetStateAction<boolean>> | null;
  };
  filterInput: {
    get: number | null;
    set: React.Dispatch<React.SetStateAction<number | null>> | null;
  };
}

export const GlobalContext = createContext<IGlobalContext>({
  products: {
    get: null,
    set: null,
  },
  paginator: {
    get: null,
    set: null,
  },
  isLoading: {
    get: false,
    set: null,
  },
  filterInput: {
    get: null,
    set: null,
  },
});
