import { Container, TextField } from '@mui/material';
import { ChangeEvent, KeyboardEvent } from 'react';
import { useAppendParams } from '../hooks/useAppendParams';
import { useAppDispatch, useAppSelector } from '../common/hooks';
import { setInputFilter, clearInputFilter } from '../features/inputFilter';
import { useFetchPage } from '../hooks/useFetchPage';

const FilterTextField = () => {
  const dispatch = useAppDispatch();
  const fetchPage = useFetchPage();
  const { appendParams } = useAppendParams();

  const inputFilter = useAppSelector((state) => state.inputFilter.value);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setInputFilter({
        value: Number(e.target.value),
      })
    );

    // Using Custom hook to Append params to URL
    appendParams('filter_id', e.target.value, ['page']);

    if (e.target.value === '') {
      dispatch(clearInputFilter());
      return fetchPage();
    }

    return fetchPage({
      filterById: Number(e.target.value),
    });
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
