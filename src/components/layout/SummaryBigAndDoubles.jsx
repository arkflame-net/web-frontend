import styles from "./summary.module.sass";
import SummaryItem from "./SummaryItem";

export default function SummaryBigAndDoubles ({ left, up, down }) {
    return (
        <div className={styles["summary"]}>
            <SummaryItem size="big" {...left} />

            <div className={styles["subsummary-big"]}>
                <SummaryItem size="fullwide" {...up} />
                <SummaryItem size="fullwide" {...down} />
            </div>
        </div>
    )
} 
 
