import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createCustomer, getAllDataCustomers, updateCustomer} from "../../api/requests";
import formatter from "../../services/formatter";

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

export interface Candidate {
    [key: string]: string;
}

const initialState: IStateCustomers = {
    data: [],
    create_customer: {
        title: "Create customer",
        list: [
            "name",
            "email",
            "age",
            "phone",
            "password"
        ],
    },
    update_customer: {
        title: "Update customer",
        list: [
            "id",
            "name",
            "email",
            "age",
            "phone",
            "password"
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
            throw Error("Failed to fetch customers data");
        }
    }
);

export const sendForm = createAsyncThunk<any, { type: string; candidate: Candidate }>(
    'users/send-form',
    async ({type, candidate}) => {
        let data = null;

        switch (type) {
            case 'create_customer':
                data = await createCustomer(candidate);
                break;
            case 'update_customer':
              data = await updateCustomer(formatter.updateCustomer(candidate));
              break;
            // case 'delete_customer':
            //   data = await deleteCustomer(formatter.deleteCustomer(candidate));
            //   break;
            // case 'create_account_customer':
            //   data = await createAccountByCustomerId({ ...candidate });
            //   break;
            // case 'delete_account_customer':
            //   data = await deleteCustomerAccount(formatter.deleteAccountById(candidate));
            //   break;
            // case 'add_funds':
            //   data = await addFunds(formatter.addFunds(candidate));
            //   break;
            // case 'withdraw_funds':
            //   data = await withdrawFunds(formatter.withdrawFunds(candidate));
            //   break;
            // case 'send_funds':
            //   data = await sendForm(formatter.sendFunds(candidate));
            //   break;
            default:
                data = null;
        }

        return data;
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