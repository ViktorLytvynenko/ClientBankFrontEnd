import React, {FC, useState} from 'react';
import {withdrawFunds} from '../../../api/requests';
import Header from '../../../components/Header/Header';

const WithdrawFunds: FC<any> = () => {
    const [cardNumber, setCardNumber] = useState<string>('');
    const [sum, setSum] = useState<number | string>(''); // Use number | string to allow initial empty state

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await withdrawFunds({cardNumber, sum: Number(sum)});
            console.log('Funds added successfully!');
            setCardNumber('');
            setSum('');
        } catch (error) {
            console.error('Error adding funds:', error);
        }
    };

    return (
        <div>
            <Header/>
            <h2>Add funds</h2>
            <form onSubmit={handleSubmit}>
                <label>Card number:</label>
                <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                /><br/>
                <label>Sum:</label>
                <input
                    type="text"
                    value={sum}
                    onChange={(e) => setSum(e.target.value)}
                    required
                /><br/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default WithdrawFunds;
