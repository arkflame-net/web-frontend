import styles from "./hero.module.sass";

export default function Hero () {
    return <div className={styles["hero"]}>
        <img src="/assets/favicon.png" alt="ArkFlame logo" className={styles["logo"]} />
    </div> 
}