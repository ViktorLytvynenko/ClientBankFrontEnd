import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import styles from "./info.module.scss"
import AllCustomers from "./InfoRequests/AllCustomers/AllCustomers";

const Info: FC<any> = () => {

    return (
        <div>
            <AllCustomers/>
            <ul className={styles.list}>
                <li className={styles.list_item}>
                    <NavLink to="/info/create_customer" className={styles.list_item_link}>
                        Create customer
                    </NavLink>
                </li>
                <li className={styles.list_item}>
                    <NavLink to="/info/edit_customer" className={styles.list_item_link}>
                        Edit customer
                    </NavLink>
                </li>
                <li className={styles.list_item}>
                    <NavLink to="/info/delete_customer" className={styles.list_item_link}>
                        Delete customer
                    </NavLink>
                </li>
                <li className={styles.list_item}>
                    <NavLink to="/info/create_account" className={styles.list_item_link}>
                        Create account for customer
                    </NavLink>
                </li>
                <li className={styles.list_item}>
                    <NavLink to="/info/delete_account" className={styles.list_item_link}>
                        Delete account for customer
                    </NavLink>
                </li>
                <li className={styles.list_item}>
                    <NavLink to="/info/delete_all_accounts" className={styles.list_item_link}>
                        Delete all customer accounts
                    </NavLink>
                </li>
                <li className={styles.list_item}>
                    <NavLink to="/info/add_funds" className={styles.list_item_link}>
                        Add funds
                    </NavLink>
                </li>
                <li className={styles.list_item}>
                    <NavLink to="/info/withdraw_funds" className={styles.list_item_link}>
                        Withdraw funds
                    </NavLink>
                </li>
                <li className={styles.list_item}>
                    <NavLink to="/info/send_funds" className={styles.list_item_link}>
                        Send funds
                    </NavLink>
                </li>
                <li className={styles.list_item}>
                    <NavLink to="/info/add_customer_from_employer" className={styles.list_item_link}>
                        Add customer to employer
                    </NavLink>
                </li>
                <li className={styles.list_item}>
                    <NavLink to="/info/remove_customer_from_employer" className={styles.list_item_link}>
                        Remove customer from employer
                    </NavLink>
                </li>
            </ul>

        </div>
    );
};

export default Info;