import React, {useState} from 'react';
import {createAccountByCustomerId} from '../../../api/requests';
import Header from '../../../components/Header/Header';

const CreateAccountForCustomer = () => {
    const [customerId, setCustomerId] = useState('');
    const [currency, setCurrency] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await createAccountByCustomerId({ id: Number(customerId), currency });
            setCustomerId('');
            setCurrency('');
        } catch (error) {
            console.error("Error creating customer:", error);
        }
    };

    return (
        <div>
            <Header />
            <h2>Create Account by Customer ID</h2>
            <form onSubmit={handleSubmit}>
                <label>Customer ID:</label>
                <input
                    type="text"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                    required
                /><br/>

                <label>Currency:</label>
                <input
                    type="text"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    required
                /><br/>

                <button type="submit">Create Account</button>
            </form>
        </div>
    );
};

export default CreateAccountForCustomer;
