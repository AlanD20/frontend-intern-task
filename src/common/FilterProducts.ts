import { Product } from "../features/products";

export interface FilterProducts {
  products: Product[];
  value?: number;
}

export const filterProducts = ({ products, value }: FilterProducts) => {

  if (!value) {
    return products.map((p) => ({ ...p, isFiltered: true }));
  }

  return products.map((product) => {
    if (product.id.toString().includes(value.toString())) {
      return {
        ...product,
        isFiltered: true,
      };
    }

    return {
      ...product,
      isFiltered: false,
    };
  }) as Product[];
};
