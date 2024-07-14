import React, {FC, useState} from "react";
import {updateCustomer} from "../../../api/requests";
import Header from "../../../components/Header/Header";

const UpdateCustomer: FC<any> = () => {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [age, setAge] = useState<string>("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await updateCustomer("1", {name, email, age: Number(age)});
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
            <Header/>
            <h2>Update Customer</h2>
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
                    value={age || ""}
                    onChange={(e) => setAge(e.target.value)}
                    required
                /><br/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default UpdateCustomer;
