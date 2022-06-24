import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from '@mui/material';
import { useAppSelector } from '../common/hooks';
import { Product } from '../features/products';
import LoadingSpinner from './LoadingSpinner';
import ProductRow from './ProductRow';
import ProductTablePaginator from './ProductTablePaginator';

interface ProductTable {
  products: Product[] | null;
}

const ProductTable = ({ products }: ProductTable) => {

  const pages = useAppSelector(state => state.products.pages);
  const isLoading = useAppSelector(state => state.isLoading.value);
  let emptyRows = 6 - (products?.length as number);
  console.log(pages);
  console.log(isLoading);
  console.log(emptyRows);

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
          {
            (isLoading || products?.length === 0) &&
            <TableRow sx={{
              position: 'absolute',
              inset: 0,
            }}>
              <TableCell colSpan={6} style={{ border: 'none' }}>
                <LoadingSpinner />
              </TableCell>
            </TableRow>
          }

          {
            (products && products.length > 0) &&
            products.map((product) => (
              <ProductRow
                id={product.id}
                name={product.name}
                year={product.year}
                color={product.color}
                key={product.id}
              />
            ))
          }

          {emptyRows > 0 &&
            <TableRow sx={{ height: 60 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          }

        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6}>
              <ProductTablePaginator />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer >
  )
};

export default ProductTable;
