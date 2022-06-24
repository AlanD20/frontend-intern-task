import { Product } from '../common/types';
import { TableRow, TableCell } from '@mui/material';

const ProductRow = ({ id, name, year, color }: Product) => (
  <TableRow
    sx={{
      '& td, & th': {
        border: 'solid 2px rgba(0,0,0,.3)',
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
