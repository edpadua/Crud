import React from 'react';

import styles from "./Navbar.module.css";

import {BsPersonFillAdd} from "react-icons/bs";

function Navbar(){
  return (
    <nav className={styles.nav_bar}>
         <BsPersonFillAdd style={{ fontSize: '30px', color: "#ffffff" }}  />
    </nav>
  )
}

export default Navbar