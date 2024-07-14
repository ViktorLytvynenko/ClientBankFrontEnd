import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import styles from "./header.module.scss"

const Header: FC<any> = () => {
    return (
        <div className={styles.container}>
            <nav>
                <ul className={styles.container_list}>
                    <li className={styles.container_list_item}>
                        <NavLink to="/" className={styles.container_list_item_link}>Home</NavLink>
                    </li>
                    <li className={styles.container_list_item}>
                        <NavLink to="/info" className={styles.container_list_item_link}>Info</NavLink>
                    </li>
                    <li className={styles.container_list_item}>
                        <NavLink to="/about_us" className={styles.container_list_item_link}>About bank</NavLink>
                    </li>
                    <li className={styles.container_list_item}>
                        <NavLink to="/contacts" className={styles.container_list_item_link}>Contacts</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;