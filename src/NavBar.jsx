import React from "react";
import s from './App.css'
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
      <nav id="mainNav">
        <NavLink activeClassName={s.active} to="/HomePage">
          Home
        </NavLink>
        <p>PUBLIC</p>
        <NavLink activeClassName={s.active} to="/ArticlePage">
          Stack Overflow
        </NavLink>
        <br />
        <NavLink activeClassName={s.active} to="/Tags">
          Tags
        </NavLink>
        <br />
        <NavLink activeClassName={s.active} to="/Users">
          Users
        </NavLink> 
      </nav>
    );
}

export default NavBar