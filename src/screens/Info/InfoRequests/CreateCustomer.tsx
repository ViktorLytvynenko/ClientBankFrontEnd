import React, {FC, useState} from "react";
import {createCustomer} from "../../../api/requests";

const CreateCustomer: FC<any> = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [age, setAge] = useState<string>("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await createCustomer(name, email, Number(age));
            console.log("Customer created successfully!");
            setName("");
            setEmail("");
            setAge("");
        } catch (error) {
            console.error("Error creating customer:", error);
        }
    };

    return (
        <div>
            <h2>Create Customer</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                /><br/>

                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /><br/>

                <label>Age:</label>
                <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                /><br/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default CreateCustomer;
