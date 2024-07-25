import React, {FC, useState} from 'react';
import {sendFunds} from '../../../api/requests';

const SendFunds: FC<any> = () => {
    const [numberFrom, setNumberFrom] = useState<string>('');
    const [numberTo, setNumberTo] = useState<string>('');
    const [sum, setSum] = useState<number | string>(''); // Use number | string to allow initial empty state

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await sendFunds({numberFrom, numberTo, sum: Number(sum)});
            console.log('Funds added successfully!');
            setNumberFrom('');
            setNumberTo('');
            setSum('');
        } catch (error) {
            console.error('Error adding funds:', error);
        }
    };

    return (
        <div>

            <h2>Send funds</h2>
            <form onSubmit={handleSubmit}>
                <label>Card number from:</label>
                <input
                    type="text"
                    value={numberFrom}
                    onChange={(e) => setNumberFrom(e.target.value)}
                    required
                /><br/>
                <label>Card number to:</label>
                <input
                    type="text"
                    value={numberTo}
                    onChange={(e) => setNumberTo(e.target.value)}
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

export default SendFunds;
