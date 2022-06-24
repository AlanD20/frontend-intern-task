import { Product } from '../common/types';
import { Container, TextField } from '@mui/material';
import { ChangeEvent, KeyboardEvent, useContext } from 'react';
import { GlobalContext } from '../common/store';
import { filterProducts } from '../common/FilterProducts';
import { useAppendParams } from '../hooks/useAppendParams';

const FilterTextField = () => {
  const { appendParams } = useAppendParams();
  const { products, filterInput } = useContext(GlobalContext);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!products.set) return;

    filterInput.set && filterInput?.set(Number(e.target.value));

    // Using Custom hook to Append params to URL
    appendParams('filter_id', e.target.value);

    if (e.target.value === '') {
      filterInput.set && filterInput?.set(null);
      return products.set((prev: Product[]) =>
        filterProducts({
          products: prev,
        })
      );
    }

    products.set((prev: Product[]) =>
      filterProducts({
        products: prev,
        value: Number(e.target.value),
      })
    );
  };

  console.log(products.get);


  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    const PATTERN = /^[0-9]*$/;
    if (!e.key.match(PATTERN)) {
      e.preventDefault();
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minWidth: 250,
        maxWidth: 750,
      }}
    >
      <TextField
        value={!filterInput.get ? '' : filterInput.get}
        onChange={handleOnChange}
        onKeyPress={handleKeyPress}
        onPaste={(e) => e.preventDefault()}
        label="Filter By ID"
        fullWidth
        inputProps={{
          inputMode: 'numeric',
          pattern: '[0-9]*',
          min: 0,
        }}
        sx={{
          margin: 'auto',
        }}
      />
    </Container>
  );
};

export default FilterTextField;
