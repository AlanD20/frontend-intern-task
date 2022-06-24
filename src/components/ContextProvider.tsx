import { useState } from "react";
import { GlobalContext } from "../common/store";
import { Paginator, Product } from "../common/types";

interface Props {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: Props) => {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filterInput, setFilterInput] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [paginator, setPaginator] = useState<Paginator>({
    page: 0,
    perPage: 0,
    total: 0,
    totalPages: 0,
  });

  const ContextObj = {
    products: {
      get: products,
      set: setProducts,
    },
    paginator: {
      get: paginator,
      set: setPaginator,
    },
    isLoading: {
      get: isLoading,
      set: setIsLoading,
    },
    filterInput: {
      get: filterInput,
      set: setFilterInput,
    },
  };

  return (
    <GlobalContext.Provider value={ContextObj}>
      {children}
    </GlobalContext.Provider>
  );
}

export default ContextProvider;
