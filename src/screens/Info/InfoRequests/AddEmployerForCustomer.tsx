import React, {FC, useState} from 'react';
import {addEmployerToCustomer} from '../../../api/requests';
import Header from '../../../components/Header/Header';

const AddEmployerForCustomer: FC<any> = () => {
    const [customerId, setCustomerId] = useState<string>('');
    const [employerId, setEmployerId] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await addEmployerToCustomer(Number(customerId), Number(employerId));
            console.log('Employer added from customer successfully!');
            setCustomerId('');
            setEmployerId('');
        } catch (error) {
            console.error('Error adding from customer:', error);
        }
    };

    return (
        <div>
            <Header />
            <h2>Add Customer to Employer</h2>
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
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddEmployerForCustomer;
