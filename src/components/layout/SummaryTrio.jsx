import styles from "./summary.module.sass";
import SummaryItem from "./SummaryItem";

export default function SummaryTrio ({ left, middle, right }) {
    return (
        <div className={styles["summary"]}>
            <SummaryItem {...left} size="normal"/>
            <SummaryItem {...middle} size="normal"/>
            <SummaryItem {...right} size="normal"/>
        </div>
    )
} 