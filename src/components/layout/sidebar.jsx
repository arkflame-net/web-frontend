import styles from "./sidebar.module.sass";

export default function Sidebar () {
    return (
        <div className={styles["sidebar"]}>
          <div>
            <iframe src="https://discord.com/widget?id=287770195441876992&theme=dark" 
              allowtransparency="true" frameborder="0" width="260" height="240"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
            </iframe>
          </div>

          <div>
            <a className="twitter-timeline" data-lang="es" data-width="260" data-height="500" data-dnt="true" data-theme="dark" href="https://twitter.com/ArkFlameNetwork?ref_src=twsrc%5Etfw">Tweets by ArkFlameNetwork</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>            
        </div>
    )
}