import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InputFilterState {
  value: number;
};

const initialState: InputFilterState = {
  value: 0
};

export const inputFilterSlice = createSlice({
  name: 'inputFilter',
  initialState,
  reducers: {
    setInputFilter(state: any, action: PayloadAction<InputFilterState>) {

      state.value = action.payload.value;
    },
    clearInputFilter(state: any) {

      state.value = 0;
    },

  },
});

export const { setInputFilter, clearInputFilter } = inputFilterSlice.actions;
export default inputFilterSlice.reducer;
