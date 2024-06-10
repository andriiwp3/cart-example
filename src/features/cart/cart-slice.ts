import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/store/types';
import { UserInputField } from '@/types/interfaces';

import { TIMES_OF_DAY } from './types';

interface CartState {
  timeOfDay: UserInputField<TIMES_OF_DAY>;
  discountCode: UserInputField;
  notes: UserInputField;
}

const initialState: CartState = {
  timeOfDay: {
    value: TIMES_OF_DAY.MORNING,
  },
  discountCode: {
    value: '',
  },
  notes: {
    value: '',
  },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    setTimeOfDay: (state, action: PayloadAction<TIMES_OF_DAY>) => {
      state.timeOfDay.value = action.payload;
    },
    setDiscount: (state, action: PayloadAction<string>) => {
      state.discountCode.value = action.payload;
    },
    setDiscountError: (state, action: PayloadAction<string | undefined>) => {
      state.discountCode.error = action.payload;
    },
    setNotes: (state, action: PayloadAction<string>) => {
      state.notes.value = action.payload;
    },
  },
});

export const { setTimeOfDay, setNotes, setDiscount, setDiscountError } = cartSlice.actions;

export const selectDiscountCode = (state: RootState) => state.cart.discountCode.value;
export const selectDiscountCodeError = (state: RootState) => state.cart.discountCode.error;
export const selectTimeOfDay = (state: RootState) => state.cart.timeOfDay.value;
export const selectNotes = (state: RootState) => state.cart.notes.value;

export default cartSlice.reducer;
