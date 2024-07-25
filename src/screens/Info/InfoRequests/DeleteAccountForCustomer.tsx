import React, {FC, useState} from 'react';
import {deleteCustomerAccount} from '../../../api/requests';

const DeleteAccountForCustomer: FC<any> = () => {
    const [id, setId] = useState<string>('');
    const [accountNumber, setAccountNumber] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await deleteCustomerAccount(Number(id), accountNumber);
            console.log('Customer deleted successfully!');
            setId('');
        } catch (error) {
            console.error('Error deleting customer:', error);
        }
    };

    return (
        <div>
            <h2>Delete Customer</h2>
            <form onSubmit={handleSubmit}>
                <label>Client ID:</label>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                /><br/>
                <label>Account number:</label>
                <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    required
                /><br/>
                <button type="submit">Delete</button>
            </form>
        </div>
    );
};

export default DeleteAccountForCustomer;
