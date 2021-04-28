import styles from "./summary.module.sass";
import SummaryItem from "./SummaryItem";

export default function SummaryBigDoubles ({ left, right }) {
    return (
        <div className={styles["summary"]}>
            <SummaryItem size="big" {...left}/>
            <SummaryItem size="big" {...right}/>
        </div>
    )
} 
 
