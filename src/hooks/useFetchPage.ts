import { useContext } from 'react';
import { GlobalContext } from '../common/store';
import { Product } from '../common/types';
import axios from 'axios';
import { filterProducts } from '../common/FilterProducts';


export const useFetchPage = () => {

  const { paginator, products, isLoading } = useContext(GlobalContext);
  const PRODUCTION_URL = 'https://reqres.in/api/products';

  const fetchPage = async (nextPage: number, filterById?: number) => {

    isLoading.set && isLoading.set(true);
    const page = nextPage > 0 ? nextPage : 1;

    const res = await axios.get(`${PRODUCTION_URL}?page=${page}`);
    const obj = res.data;

    let fetchedProducts: Product[] = obj.data.map((p: any) => ({
      id: p.id,
      name: p.name,
      year: p.year,
      color: p.color,
      isFiltered: true,
    }));

    if (filterById && filterById > 0) {
      fetchedProducts = filterProducts({
        products: fetchedProducts,
        value: filterById,
      });
    }

    products.set && products.set(fetchedProducts);

    paginator.set && paginator.set({
      page: obj.page,
      perPage: obj.per_page,
      total: obj.total,
      totalPages: obj.total_pages,
    });

    isLoading.set && isLoading.set(false);
  }

  return fetchPage;
}








