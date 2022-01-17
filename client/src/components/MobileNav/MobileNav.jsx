import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../Nav/SearchBar";
import SideBar from "../Home/Sidebar";
import "./MobileNav.css";

export default function MobileNav() {
  const { pathname } = useLocation();

  return (
    <nav id="nav-mobile" role="navigation">
      <div id="menuToggleMobile">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu-mobile">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/home/add">
            <li>Crear</li>
          </Link>
          <span
            style={{
              color: "lightyellow",
              width: "100%",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />
          <div>
            <SearchBar />
          </div>
          {pathname === "/home" ? (
            <span
              style={{
                color: "lightyellow",
                width: "100%",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            />
          ) : undefined}
          {pathname === "/home" ? (
            <div>
              <SideBar />
            </div>
          ) : undefined}
        </ul>
      </div>
    </nav>
  );
}
