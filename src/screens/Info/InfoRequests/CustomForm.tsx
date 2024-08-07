import React, {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../redux/store";
import {Candidate, IStateCustomers, sendForm} from "../../../redux/slices/bank";
import generateLabel from "../../../services/generateLabel";

interface ICustomFormProps {
    type: keyof IStateCustomers;
}


const CustomForm: FC<ICustomFormProps> = ({type}) => {
    const {title, list} = useSelector((state: RootState) => state.bank[type]);

    const dispatch = useDispatch<AppDispatch>()

    const [formData, setFormData] = useState<Candidate>({});
    const handleUpdateInput = (nameField: string, newValue: string) => {
        setFormData(prev => ({...prev, [nameField]: newValue}));
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formData)
        dispatch(sendForm({type, candidate:formData}))
    }
    return (
        <div>
            <h2>{title}</h2>
            <form onSubmit={handleSubmit}>
                {list.map((input: string) => (
                    <label key={input}>
                        <p>{generateLabel(input)}</p>
                        <input
                            type="text"
                            value={formData[input]}
                            onChange={(e) => handleUpdateInput(input, e.target.value)}
                            required
                        /><br/>
                    </label>
                ))}
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default CustomForm