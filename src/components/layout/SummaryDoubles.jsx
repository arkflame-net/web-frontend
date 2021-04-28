import styles from "./summary.module.sass";
import SummaryItem from "./SummaryItem";

export default function SummaryDoubles ({ left, right }) {
    return (
        <div className={styles["summary"]}>
            <SummaryItem size="wide" {...left}/>
            <SummaryItem size="wide" {...right}/>
        </div>
    )
} 
