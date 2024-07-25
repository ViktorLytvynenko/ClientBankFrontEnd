import React, {FC} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {IStateCustomers} from "../../../redux/slices/bank";

interface ICustomFormProps {
    type: keyof IStateCustomers;
}

const CustomForm: FC<ICustomFormProps> = ({type}) => {
    // const {title, list} = useSelector((state: RootState) => state.bank[type]);
    return (
        <></>
        // <div>
        //     <h2>{title}</h2>
        //     <form onSubmit={handleSubmit}>
        //         {list.map((input) => (
        //             <InputForm
        //                 key={input}
        //                 label={generateLabel(input)}
        //                 value={formData[input]}
        //                 formName={input}
        //                 handleUpdate={handleUpdate}
        //             />
        //         ))}
        //         <button type="submit">Send</button>
        //     </form>
        // </div>
    )
}

export default CustomForm