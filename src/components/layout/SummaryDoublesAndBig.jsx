import styles from "./summary.module.sass";
import SummaryItem from "./SummaryItem";

export default function SummaryDoublesAndBig ({ right, up, down}) {
    return (
        <div className={styles["summary"]}>
            <div className={styles["subsummary-big"]}>
                <SummaryItem size="fullwide" {...up} />
                <SummaryItem size="fullwide" {...down} />
            </div>
            <SummaryItem size="big" {...right} />
        </div>
    )
} 
 
