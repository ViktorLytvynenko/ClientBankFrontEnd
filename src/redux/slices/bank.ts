import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAllDataCustomers} from "../../api/requests";

export interface IStateCustomers {
    data: any;
    create_customer: {
        title: string;
        list: string[];
    };
    update_customer: {
        title: string;
        list: string[];
    };
    delete_customer: {
        title: string;
        list: string[];
    };
    create_account_customer: {
        title: string;
        list: string[];
    };
    delete_account_customer: {
        title: string;
        list: string[];
    };
    add_funds: {
        title: string;
        list: string[];
    };
    withdraw_funds: {
        title: string;
        list: string[];
    };
    send_funds: {
        title: string;
        list: string[];
    };
    add_employer_to_customer: {
        title: string;
        list: string[];
    },
    delete_employer_from_customer: {
        title: string;
        list: string[];
    }
}

const initialState: IStateCustomers = {
    data: [],
    create_customer: {
        title: "Create customer",
        list: [
            "name",
            "email",
            "age"
        ],
    },
    update_customer: {
        title: "Update customer",
        list: [
            "id",
            "name",
            "email",
            "age"
        ]
    },
    delete_customer: {
        title: "Delete customer",
        list: [
            "id"
        ]
    },
    create_account_customer: {
        title: "Create account customer",
        list: [
            "customer_id",
            "currency"
        ]
    },
    delete_account_customer: {
        title: "Delete account customer",
        list: [
            "client_id",
            "account_number"
        ]
    },
    add_funds: {
        title: "Add funds",
        list: [
            "card_number",
            "sum"
        ]
    },
    withdraw_funds: {
        title: "Withdraw funds",
        list: [
            "card_number",
            "sum"
        ]
    },
    send_funds: {
        title: "send_funds",
        list: [
            "card_number_from",
            "card_number_to",
            "sum"
        ]
    },
    add_employer_to_customer: {
        title: "add_employer_to_customer",
        list: [
            "customer_id",
            "employer_id"
        ]
    },
    delete_employer_from_customer: {
        title: "delete_employer_from_customer",
        list: [
            "customer_id",
            "employer_id"
        ]
    }
};

export const getData = createAsyncThunk(
    "customers/get",
    async () => {
        try {
            return await getAllDataCustomers();
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