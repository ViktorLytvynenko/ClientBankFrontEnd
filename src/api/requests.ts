import {instance} from "./instance";

const customers = "/customers"
const accounts = "/accounts"

export const getCustomers = async () => {
    const {data} = await instance.get(customers);
    return data;
}

export const createCustomer = async (name: string, email: string, age: number) => {
    const response = await instance.post(customers + "/create", {}, {
        params: {
            name: name,
            email: email,
            age: age
        }
    });
    return response.data;
};

export const updateCustomer = async (id: string, customer: { name: string, email: string, age: number }) => {
    const response = await instance.put(customers + `/update/${id}`, customer);
    return response.data;
};

export const deleteCustomer = async (id: number) => {
    const response = await instance.delete(customers + `/delete/${id}`);
    return response.data;
};

export const createAccountByCustomerId = async (customer: { id: number, currency: string }) => {
    const response = await instance.post(customers + `/create_account_by_id`, customer);
    return response.data;
};

export const deleteCustomerAccount = async (customerId: number, accountNumber: string) => {
    const response = await instance.delete(customers + `/delete_account_by_id?id=${customerId}&accountNumber=${accountNumber}`);
    return response.data;
};


export const addFunds = async (addFundsModel: { cardNumber: string, sum: number }) => {
    const response = await instance.post(accounts + '/add_funds', addFundsModel);
    return response.data;
};

export const withdrawFunds = async (addFundsModel: { cardNumber: string, sum: number }) => {
    const response = await instance.post(accounts + '/withdraw_funds', addFundsModel);
    return response.data;
};

export const sendFunds = async (addFundsModel: { numberFrom: string, numberTo: string, sum: number }) => {
    const response = await instance.post(accounts + '/send_funds', addFundsModel);
    return response.data;
};