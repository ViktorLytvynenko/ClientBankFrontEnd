import {FC} from "react";
import styles from "./aboutUs.module.scss";

const AboutUs: FC<any> = () => {
    return (
        <div>
            <div className={styles.container}>
                <p>
                    <strong>About the bank</strong>
                </p>
                <p>
                    PrivatBank is the largest bank of Ukraine, moving the country forward
                </p>
                <p>
                    We appreciate your trust
                    <p>
                        In the most difficult times, we remain a stable and reliable partner for the financial affairs
                        of Ukrainians. We are trusted by more than 19 million active customers - individuals and
                        companies, and every day we take and do everything to strengthen your trust.
                    </p>
                </p>
                <p>
                    We focus on the needs of customers
                </p>
                <p>

                    More than 1,000 branches, 5,000 ATMs and 10,000 self-service terminals of PrivatBank operate every
                    day across the country. We believe that innovation should make life easier and more convenient.
                    Therefore, we constantly improve our products and services, responding to the most demanding needs
                    of our customers.
                </p>
                <p>
                    We are building a country of dreams
                </p>
                <p>
                    Our goal is an economically strong Ukraine. PrivatBank is a responsible employer and one of the
                    largest taxpayers in the country. Despite difficult times, we are moving the economy forward without
                    stopping lending to Ukrainians and businesses. In 2022, the share of PrivatBank in the retail loan
                    portfolio increased from 26 to 32%, and the business received UAH 23.8 billion in new loans. We are
                    working for the victory and restoration of Ukraine.
                </p>
            </div>
        </div>
    )
}

export default AboutUs;