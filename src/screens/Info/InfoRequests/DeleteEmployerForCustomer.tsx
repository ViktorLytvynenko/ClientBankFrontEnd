import React, {FC, useState} from 'react';
import {removeEmployerToCustomer} from '../../../api/requests';
import Header from '../../../components/Header/Header';

const DeleteEmployerForCustomer: FC<any> = () => {
    const [customerId, setCustomerId] = useState<string>('');
    const [employerId, setEmployerId] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await removeEmployerToCustomer(Number(customerId), Number(employerId));
            console.log('Employer removed from customer successfully!');
            setCustomerId('');
            setEmployerId('');
        } catch (error) {
            console.error('Error removing from customer:', error);
        }
    };

    return (
        <div>
            <Header />
            <h2>Remove Customer from Employer</h2>
            <form onSubmit={handleSubmit}>
                <label>Client ID:</label>
                <input
                    type="text"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                    required
                /><br/>
                <label>Employer ID:</label>
                <input
                    type="text"
                    value={employerId}
                    onChange={(e) => setEmployerId(e.target.value)}
                    required
                /><br/>
                <button type="submit">Remove</button>
            </form>
        </div>
    );
};

export default DeleteEmployerForCustomer;
