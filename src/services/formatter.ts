import {Candidate} from "../redux/slices/bank";

export interface IUpdateCustomer {
    id: string,
    customer: Candidate
}

const formatter = {
    updateCustomer: (candidate: Candidate): IUpdateCustomer => ({
            id: candidate.id,
            customer: {
                name: candidate.name,
                email: candidate.email,
                age: parseInt(candidate.age, 10),
                phone: candidate.phone,
                password: candidate.password
            }
        }
    ),
    deleteCustomer: (candidate: Candidate) => candidate.id,
    deleteAccountById: (candidate: Candidate) => (
        {
            id: candidate.customer_id,
            accountNumber: candidate.currency
        }
    ),
    addFunds: (candidate: Candidate) => (
        {
            cardNumber: candidate.card_number,
            sum: candidate.sum
        }
    ),
    withdrawFunds: (candidate: Candidate) => (
        {
            cardNumber: candidate.card_number,
            sum: candidate.sum
        }
    ),
    sendFunds: (candidate: Candidate) => (
        {
            numberForm: candidate.card_number_from,
            numberTo: candidate.card_number_to,
            sum: candidate.sum
        }
    )
}

export default formatter