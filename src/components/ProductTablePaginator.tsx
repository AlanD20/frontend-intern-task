import { useAppendParams } from '../hooks/useAppendParams';
import { Pagination } from '@mui/material';
import { ROWS_PER_PAGE, useFetchPage } from '../hooks/useFetchPage';
import { useAppDispatch, useAppSelector } from '../common/hooks';
import { clearInputFilter } from '../features/inputFilter';

const ProductTablePaginator = () => {
  const dispatch = useAppDispatch();
  const fetchPage = useFetchPage();
  const { appendParams } = useAppendParams();

  const pages = useAppSelector((state) => state.products.pages);

  const handleChangePage = async (
    // @ts-ignore
    e: any,
    nextPage: number
  ) => {
    // Track text field with query params
    appendParams('page', nextPage, ['filter_id']);

    // Clear filter field for next page
    dispatch(clearInputFilter());

    // Fetch New Page
    fetchPage({ nextPage });
  };

  return (
    <>
      {pages && pages.total > ROWS_PER_PAGE && (
        <Pagination
          count={pages.totalPages}
          page={pages.current}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
          color="primary"
          sx={{
            display: 'flex',
            marginBlockStart: '2rem',
            '& > ul:first-of-type': {
              margin: 'auto',
            },
          }}
        />
      )}
    </>
  );
};

export default ProductTablePaginator;
