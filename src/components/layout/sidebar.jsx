import styles from "./sidebar.module.sass";
import SidebarUserElement from "./SidebarUserElement";

export default function Sidebar({ user }) {
  return (
    <div className={styles["sidebar"]}>
      {user != null ? <SidebarUserElement user={user} /> : ""}
      <div>
        <iframe
          src="https://discord.com/widget?id=287770195441876992&theme=dark"
          allowtransparency="true"
          frameborder="0"
          height="400"
          title="Discord"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </div>
  );
}
