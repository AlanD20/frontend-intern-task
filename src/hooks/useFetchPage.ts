import { filterProducts } from '../common/FilterProducts';
import { useAppDispatch } from '../common/hooks';
import { Product, setProducts } from '../features/products';
import axios from 'axios';
import { setIsLoading } from '../features/isLoading';


export const useFetchPage = () => {

  const dispatch = useAppDispatch();
  const PRODUCTION_URL = 'https://reqres.in/api/products';

  const fetchPage = async (nextPage: number, filterById?: number) => {

    dispatch(setIsLoading({ value: true }));

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

    dispatch(setProducts({
      data: fetchedProducts,
      pages: {
        page: obj.page,
        perPage: obj.per_page,
        total: obj.total,
        totalPages: obj.total_pages,
      }
    }));

    dispatch(setIsLoading({ value: false }));

  }

  return fetchPage;
}








