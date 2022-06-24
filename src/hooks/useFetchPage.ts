import { useAppDispatch } from '../common/hooks';
import { Product, setProducts } from '../features/products';
import axios from 'axios';
import { setIsLoading } from '../features/isLoading';

export const ROWS_PER_PAGE = 5;

interface FetchPage {
  nextPage?: number;
  filterById?: number;
}

export const useFetchPage = () => {
  const dispatch = useAppDispatch();
  const PRODUCTION_URL = 'https://reqres.in/api/products';

  const fetchPage = async ({ nextPage, filterById }: FetchPage = {}) => {
    dispatch(setIsLoading({ value: true }));

    const page = nextPage && nextPage > 0 ? nextPage : 1;
    let URL = `${PRODUCTION_URL}?per_page=${ROWS_PER_PAGE}`;

    if (nextPage && nextPage > 0) URL += `&page=${page}`;
    if (filterById && filterById > 0) URL += `&id=${filterById}`;

    let fetchedProducts: Product[] = [];
    let pages = null;

    try {
      const res = await axios.get(URL);
      const obj = res.data;

      if (filterById && filterById > 0) {
        fetchedProducts.push({
          id: obj.data.id,
          name: obj.data.name,
          year: obj.data.year,
          color: obj.data.color,
        });
      } else {
        fetchedProducts = obj.data.map((p: any) => ({
          id: p.id,
          name: p.name,
          year: p.year,
          color: p.color,
        }));
      }

      pages = {
        current: obj.page,
        perPage: obj.per_page,
        total: obj.total,
        totalPages: obj.total_pages,
      };
    } catch (error) {
      return;
    } finally {
      console.log('FETCHING FINALL');
      console.log(pages);
      console.log(fetchedProducts);

      dispatch(
        setProducts({
          pages,
          data: fetchedProducts,
        })
      );
      dispatch(setIsLoading({ value: false }));
    }
  };

  return fetchPage;
};
