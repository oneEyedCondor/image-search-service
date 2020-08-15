import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.scss";

export default () => (
  <nav className="navigation">
    <ul>
      <li>
        <NavLink to="/" exact={true} activeClassName="is-active">
          Main
        </NavLink>
      </li>
      <li>
        <NavLink to="/history" activeClassName="is-active">
          History
        </NavLink>
      </li>
    </ul>
  </nav>
);
