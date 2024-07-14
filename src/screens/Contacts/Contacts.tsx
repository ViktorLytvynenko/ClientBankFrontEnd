import React, {FC} from "react";
import Header from "../../components/Header/Header";
import styles from "./contacts.module.scss";

const Contacts: FC<any> = () => {
    const email: String = 'privat@bank.com';
    const phone: String = '3700';

    return (
        <div>
            <Header/>
            <div className={styles.container}>
                <div>Contact information</div>
                <ul className={styles.container_list}>
                    <li className={styles.container_list_item}>
                        <a
                            className={styles.container_list_item_link}
                            href={`mailto:${email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Email: {email}
                        </a>
                    </li>
                    <li className={styles.container_list_item}>
                        <a
                            className={styles.container_list_item_link}
                            href={`tel:${phone}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Phone: {phone}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Contacts;
