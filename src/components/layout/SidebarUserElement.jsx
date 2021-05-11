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
              src="https://crafatar.com/renders/body/67733759e7c44b36aba7f7d58e1af9d6?overlay=1"
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
