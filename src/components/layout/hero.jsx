import styles from "./hero.module.sass";

export default function Hero () {
    return <div className={styles["hero"]}>
        <img src="/assets/favicon.png" draggable="false" alt="ArkFlame logo" className={styles["logo"]} />
    </div> 
}