import { Container, TextField } from '@mui/material';
import { ChangeEvent, KeyboardEvent } from 'react';
import { useAppendParams } from '../hooks/useAppendParams';
import { useAppDispatch, useAppSelector } from '../common/hooks';
import { setInputFilter, clearInputFilter } from '../features/inputFilter';
import { filterByProducts } from '../features/products';


const FilterTextField = () => {

  const { appendParams } = useAppendParams();
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products.data)
  const inputFilter = useAppSelector(state => state.inputFilter.value);


  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {


    dispatch(setInputFilter({
      value: Number(e.target.value)
    }));

    // Using Custom hook to Append params to URL
    appendParams('filter_id', e.target.value);

    if (e.target.value === '') {

      dispatch(clearInputFilter());
      return dispatch(filterByProducts({ products }));
    }

    return dispatch(filterByProducts({
      products,
      filterBy: Number(e.target.value),
    }));
  };


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
        minWidth: 200,
        maxWidth: 750,
      }}
    >
      <TextField
        value={inputFilter !== 0 ? inputFilter : ''}
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
