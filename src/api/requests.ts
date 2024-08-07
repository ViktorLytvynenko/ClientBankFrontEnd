import {instance} from "./instance";
import {Candidate} from "../redux/slices/bank";

const customers = "/customers"
const accounts = "/accounts"

export const getAllDataCustomers = async () => {
    const {data} = await instance.get(customers + "/all_data");
    return data;
}

export const createCustomer = async (customer: Candidate) => {
    const response = await instance.post(customers + "/create", customer);
    return response.data;
};

interface ICustomer {
    customer: {
        name: string,
        email: string,
        age: number,
        password: string,
        phone: string
    }
}

export const updateCustomer = async ({id, customer}: { id: string; customer: ICustomer }) => {
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

export const deleteAllCustomerAccounts = async (customerId: number) => {
    const response = await instance.delete(customers + `/delete_accounts_by_id?id=${customerId}`);
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

export const addEmployerToCustomer = async (customerId: number, employerId: number) => {
    const response =
        await instance.put(customers + `/customer/add_employer?customerId=${customerId}&employerId=${employerId}`);
    return response.data;
}

export const removeEmployerToCustomer = async (customerId: number, employerId: number) => {
    const response =
        await instance.put(customers + `/customer/remove_employer?customerId=${customerId}&employerId=${employerId}`);
    return response.data;
}