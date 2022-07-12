import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

import { NavLink } from "react-router-dom";

import simly from "../../assets/icons/logo.svg";

export default function SideBar() {
  return (
    <div className="menu">
      <img src={simly} className="simly" alt="Simly" />
      <div className="menu-items">
        <Link className="sidebar" to="/">
          <span>Dashboard</span>
        </Link>
        <Link className="sidebar" to="/analytics">
          <span>Analytics</span>
        </Link>
        <Link className="sidebar" to="/orders">
          <span>Orders</span>
        </Link>
        <Link className="sidebar" to="/newEsim">
          <span>New eSIM</span>
        </Link>
        <Link className="sidebar" to="settings">
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );


}
