import React from 'react';
import h from "../styles/Header.module.css";

function Header() {
  return (
    <div className={h.header}>
      <img className={h.brand} src="/logo.jpg" alt="logo"/>
    </div>
  )
}

export default Header;
