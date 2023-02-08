import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getColor } from "../../utils/getColor";

const initialState: string = getColor();

export const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        setColor: (state, action: PayloadAction<string>) => action.payload,
    }
})

export const { setColor } = colorSlice.actions

export default colorSlice.reducer
