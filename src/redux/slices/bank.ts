import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getCustomers} from "../../api/requests";

export interface IStateCustomers {
    data: any;
}

const initialState: IStateCustomers = {
    data: [],
};

export const getData = createAsyncThunk(
    "customers/get",
    async () => {
        try {
            return await getCustomers();
        } catch (error) {
            throw Error("Failed to fetch sales data");
        }
    }
);

export const bankSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getData.fulfilled, (state, action) => {
                state.data = action.payload;
            })
    },
});

export default bankSlice.reducer;