import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from '@mui/material';
import { useContext } from 'react';
import { GlobalContext } from '../common/store';
import { Product } from '../common/types';
import LoadingSpinner from './LoadingSpinner';
import ProductRow from './ProductRow';
import ProductTablePaginator from './ProductTablePaginator';

interface ProductTable {
  products: Product[] | null;
}

const ProductTable = ({ products }: ProductTable) => {

  const { isLoading, paginator } = useContext(GlobalContext);

  let perPage = paginator.get && paginator.get.perPage;
  let left = perPage && (perPage - (products?.length as number));

  const emptyRows = (left && (left > 0 ? perPage : 0)) ?? 0;

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
                border: 'solid 2px rgba(0,0,0,.7)',
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
            (isLoading.get || products?.length === 0) &&
            <TableRow sx={{
              position: 'absolute',
              inset: 0,
              height: 60 * 6
            }}>
              <TableCell colSpan={6}>
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
