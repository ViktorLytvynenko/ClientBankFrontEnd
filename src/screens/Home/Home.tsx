import {FC} from "react";
import Header from "../../components/Header/Header";
import styles from "./home.module.scss"

const Home: FC<any> = () => {
    return (
        <div>
            <Header/>
            <div className={styles.container}>
                <div className={styles.container_texts}>
                    <p className={styles.container_texts_text1}>
                        We Foster Your Business Progress
                    </p>
                    <p className={styles.container_texts_text2}>
                        In line with reputable agencies,
                        our effectiveness is measured
                        by recent outcomes
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;