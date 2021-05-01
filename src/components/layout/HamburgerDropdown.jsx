import React from "react";
import styles from "./navbar.module.sass";

import { Link } from "react-router-dom";

export default class HamburgerDropdown extends React.Component {
  render() {
    return (
      <>
        <Link to="/" className={styles["item"]}>
          <span>Inicio</span>
        </Link>
        <Link to="/community" className={styles["item"]}>
          <span>Comunidad</span>
        </Link>
        <Link to="/stats" className={styles["item"]}>
          <span>Estadísticas</span>
        </Link>
        <Link to="/rules" className={styles["item"]}>
          <span>Reglas</span>
        </Link>
        <Link to="/store" className={styles["item"]}>
          <span>Tienda</span>
        </Link>
      </>
    );
  }
}
