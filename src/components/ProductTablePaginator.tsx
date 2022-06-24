import { useContext } from 'react';
import { GlobalContext } from '../common/store';
import { useAppendParams } from '../hooks/useAppendParams';
import { Pagination } from '@mui/material';
import { useFetchPage } from '../hooks/useFetchPage';

const ProductTablePaginator = () => {

  const { appendParams } = useAppendParams();
  const { paginator, filterInput } = useContext(GlobalContext);
  const fetchPage = useFetchPage();

  const handleChangePage = async (
    // @ts-ignore
    e: any,
    nextPage: number
  ) => {

    // Track text field with query params
    appendParams('page', nextPage, ['filter_id']);

    // Clear filter field for next page
    filterInput.set && filterInput.set(null);

    // Fetch New Page
    fetchPage(nextPage);
  };

  return (
    <>
      {paginator.get && <Pagination
        count={paginator.get?.totalPages}
        page={paginator.get?.page}
        onChange={handleChangePage}
        variant="outlined"
        shape="rounded"
        color='primary'
        sx={{
          display: 'flex',
          marginBlockStart: '2rem',
          '& > ul:first-of-type': {
            margin: 'auto'
          },
        }}
      />

      }
    </>
  );
};

export default ProductTablePaginator;
