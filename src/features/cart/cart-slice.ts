import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TIMES_OF_DAY } from "./types";
import { RootState } from "@/store/types";

interface CartState {
    timeOfDay: TIMES_OF_DAY;
    discountCode: string;
    notes: string;
}

const initialState: CartState = {
    timeOfDay: TIMES_OF_DAY.MORNING,
    discountCode: '',
    notes: '',
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        setTimeOfDay: (state, action: PayloadAction<TIMES_OF_DAY>) => {
            state.timeOfDay = action.payload;
        },
        setDiscount: (state, action: PayloadAction<string>) => {
            state.discountCode = action.payload;
        },
        setNotes: (state, action: PayloadAction<string>) => {
            state.notes = action.payload;
        }
    },
});

export const { setTimeOfDay, setNotes, setDiscount } = cartSlice.actions;

export const selectDiscountCode = (state: RootState) => state.cart.discountCode;
export const selectTimeOfDay = (state: RootState) => state.cart.timeOfDay;
export const selectNotes = (state: RootState) => state.cart.notes;

export default cartSlice.reducer;