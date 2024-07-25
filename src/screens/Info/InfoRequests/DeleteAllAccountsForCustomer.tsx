import React, {FC, useState} from 'react';
import {deleteAllCustomerAccounts} from '../../../api/requests';

const DeleteAllAccountsForCustomer: FC<any> = () => {
    const [id, setId] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await deleteAllCustomerAccounts(Number(id));
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
                <button type="submit">Delete</button>
            </form>
        </div>
    );
};

export default DeleteAllAccountsForCustomer;
