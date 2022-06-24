import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IsLoadingState {
  value: boolean;
}

const initialState: IsLoadingState = {
  value: true,
};

export const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState,
  reducers: {
    setIsLoading(state: any, action: PayloadAction<IsLoadingState>) {
      state.value = action.payload.value;
      console.log(state.value);
    },
  },
});

export const { setIsLoading } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;
