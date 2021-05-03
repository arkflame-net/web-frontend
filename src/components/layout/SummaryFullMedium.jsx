import styles from "./summary.module.sass";
import SummaryItem from "./SummaryItem";

export default function SummaryFullMedium (props) {
    return (
        <div className={styles["summary"]}>
            <SummaryItem {...props} size="fullmedium"  />
        </div>
    )
}