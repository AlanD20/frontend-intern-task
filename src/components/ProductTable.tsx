import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useAppSelector } from '../common/hooks';
import { Product } from '../features/products';
import { ROWS_PER_PAGE } from '../hooks/useFetchPage';
import LoadingSpinner from './LoadingSpinner';
import ProductRow from './ProductRow';
import ProductTablePaginator from './ProductTablePaginator';

interface ProductTable {
  products: Product[] | null;
}

const ProductTable = ({ products }: ProductTable) => {
  const isLoading = useAppSelector((state) => state.isLoading.value);
  const pages = useAppSelector((state) => state.products.pages);
  let emptyRows = ROWS_PER_PAGE - (products?.length as number);

  return (
    <TableContainer
      sx={{
        marginBlockStart: 2,
      }}
    >
      <Table
        sx={{
          minWidth: 250,
          maxWidth: 750,
          margin: 'auto',
        }}
      >
        <TableHead>
          <TableRow
            sx={{
              '& td, & th': {
                border: '2px solid white',
                borderBottom: '2px solid rgba(0,0,0,.7)',
                fontWeight: 900,
              },
            }}
          >
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ position: 'relative' }}>
          {(isLoading || products?.length === 0) && (
            <TableRow
              sx={{
                position: 'absolute',
                inset: 0,
              }}
            >
              <TableCell
                colSpan={6}
                style={{
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {pages ? (
                  <LoadingSpinner />
                ) : (
                  <Typography
                    variant="h6"
                    component="p"
                    sx={{
                      textAlign: 'center',
                    }}
                  >
                    Product not found!
                  </Typography>
                )}
              </TableCell>
            </TableRow>
          )}

          {products &&
            products.length > 0 &&
            products.map((product) => (
              <ProductRow
                id={product.id}
                name={product.name}
                year={product.year}
                color={product.color}
                key={product.id}
              />
            ))}

          {emptyRows > 0 && (
            <TableRow sx={{ height: 60 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6}>
              <ProductTablePaginator />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
