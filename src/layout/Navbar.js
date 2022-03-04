import React from "react";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  const changeStatus = (status) => {
    props.handleStatus(status);
  };
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <a className={styles.active} href="#">
            Home
          </a>
        </li>
        <li onClick={() => changeStatus("users")}>
          <a href="#">Users</a>
        </li>
        <li onClick={() => changeStatus("posts")}>
          <a href="#">Posts</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
