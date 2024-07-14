import React, {FC} from "react";
import Header from "../../components/Header/Header";
import {NavLink} from "react-router-dom";
import styles from "./info.module.scss"
import AllCustomers from "./InfoRequests/AllCustomers/AllCustomers";

const Info: FC<any> = () => {

    return (
        <div>
            <Header/>
            <AllCustomers/>
            <ul className={styles.list}>
                <li className={styles.list_item}>
                    <NavLink to="/create_customer" className={styles.list_item_link}>
                        Create customer
                    </NavLink>
                </li>
                <li className={styles.list_item}>
                    <NavLink to="/edit_customer" className={styles.list_item_link}>
                        Edit customer
                    </NavLink>
                </li>
                <li className={styles.list_item}>
                    <NavLink to="/delete_customer" className={styles.list_item_link}>
                        Delete customer
                    </NavLink>
                </li>
                <li className={styles.list_item}>
                    <NavLink to="/create_account" className={styles.list_item_link}>
                        Create account for customer
                    </NavLink>
                </li>
                <li className={styles.list_item}>
                    <NavLink to="/delete_account" className={styles.list_item_link}>
                        Delete account for customer
                    </NavLink>
                </li>
                <li className={styles.list_item}>
                    <NavLink to="/add_funds" className={styles.list_item_link}>
                        Add funds
                    </NavLink>
                </li>
                <li className={styles.list_item}>
                    <NavLink to="/withdraw_funds" className={styles.list_item_link}>
                        Withdraw funds
                    </NavLink>
                </li>
                <li className={styles.list_item}>
                    <NavLink to="/send_funds" className={styles.list_item_link}>
                        Send funds
                    </NavLink>
                </li>
            </ul>

        </div>
    );
};

export default Info;