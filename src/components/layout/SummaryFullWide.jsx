import styles from "./summary.module.sass";
import SummaryItem from "./SummaryItem";

export default function SummaryFullWide (props) {
    return (
        <div className={styles["summary"]}>
            <SummaryItem {...props} size="fullwide"  />
        </div>
    )
}