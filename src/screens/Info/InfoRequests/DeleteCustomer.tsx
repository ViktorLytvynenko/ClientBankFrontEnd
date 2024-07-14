import React, { FC, useState } from 'react';
import { deleteCustomer } from '../../../api/requests';
import Header from '../../../components/Header/Header';

const DeleteCustomer: FC<any> = () => {
    const [id, setId] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await deleteCustomer(Number(id));
            console.log('Customer deleted successfully!');
            setId('');
        } catch (error) {
            console.error('Error deleting customer:', error);
        }
    };

    return (
        <div>
            <Header />
            <h2>Delete Customer</h2>
            <form onSubmit={handleSubmit}>
                <label>ID:</label>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                /><br/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default DeleteCustomer;
