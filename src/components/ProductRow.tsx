import { TableRow, TableCell } from '@mui/material';
import { Product } from '../features/products';

const ProductRow = ({ id, name, year, color }: Product) => (
  <TableRow
    sx={{
      '& td, & th': {
        border: '2px solid white',
        fontWeight: 500,
      },
      backgroundColor: color,
      height: 60
    }}
  >
    <TableCell align="center">{id}</TableCell>
    <TableCell align="center">{name}</TableCell>
    <TableCell align="center">{year}</TableCell>
  </TableRow>
);

export default ProductRow;
