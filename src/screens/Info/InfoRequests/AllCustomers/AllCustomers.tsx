import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { getData } from "../../../../redux/slices/bank";
import styles from "./allCustomers.module.scss";

const AllCustomers: FC<any> = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.bank.data);

    useEffect(() => {
        dispatch<any>(getData());
    }, [dispatch]);

    return (
        <>
            <p className={styles.title}>All customers</p>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Accounts</th>
                </tr>
                </thead>
                <tbody>
                    {data?.map((customer: any) => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.age}</td>
                            <td>
                                {customer.accounts && customer.accounts.length > 0 ? (
                                    <ul>
                                        {customer.accounts.map((account: any, index: number) => (
                                            <li key={index}>
                                                <div>№: {account.number}</div>
                                                <div className={styles.accountBalance}>Balance: {account.balance} {account.currency}</div>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <span>No accounts</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default AllCustomers;
