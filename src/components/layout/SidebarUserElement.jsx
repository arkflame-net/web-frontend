import React from "react";
import { Link } from "react-router-dom";
import "./SidebarUserElement.css";

export default class SidebarUserElement extends React.Component {
  render() {
    const { user } = this.props;
    if (user) {
      return (
        <Link to={"/user/" + user.unwrappedUser.username}>
          <div className="user-card">
            <img
              className="user-render"
              src={`https://minotar.net/armor/bust/${user.unwrappedUser.username}/100.png`}
              alt="Skin del usuario"
            />
            <ul className="user-data">
              <li>
                <span className="user-name">{user.unwrappedUser.username}</span>
              </li>
              <li>
                <span className={user.unwrappedUser.roles[0] + " user-rank"}>
                  {user.unwrappedUser.roles.length > 0
                    ? user.unwrappedUser.roles[0]
                    : "Default"}
                </span>
              </li>
            </ul>
          </div>
        </Link>
      );
    } else return <div></div>;
  }
}
