import styles from "./summary.module.sass";

export default function SummaryNormal ({ image, title, subtitle, size, children}) {
    if (image == null) {
        image = "/assets/panels/default.jpg"
    }
    
    return (
        <div className={styles[size]} style={{"backgroundImage": "url('" + image + "')"}}>
            <div className={styles["content"]}>
                <span className={styles["title"]}>{title}</span>
                <span className={styles["subtitle"]}>{subtitle}</span>
                {children != null && children}
            </div>
        </div>
    )
} 
 
