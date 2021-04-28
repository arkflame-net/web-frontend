import styles from "./sidebar.module.sass";

export default function Sidebar () {
    return (
        <div className={styles["sidebar"]}>
          <div>
            <iframe src="https://discord.com/widget?id=287770195441876992&theme=dark" 
              allowtransparency="true" frameborder="0" width="260" height="240"
              title="Discord"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
            </iframe>
          </div>          
        </div>
    )
}