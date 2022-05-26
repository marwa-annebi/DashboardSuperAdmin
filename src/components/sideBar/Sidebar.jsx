import React from "react";
import logo from "./../../assets/logo.png";
import { Menu, Button } from "antd";
import "./sidebar.css";
import {
  QrcodeOutlined,
  TeamOutlined,
  ContainerOutlined,
  SettingOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";

function getItem(label, key, icon) {
  return {
    label,
    key,
  };
}

const items = [
  getItem(
    <NavLink
      className={({ isActive }) => (isActive ? "link-active" : "link")}
      to="/dashboard"
    >
      Dashboard
    </NavLink>,
    "1"
  ),
  getItem(
    <NavLink
      className={({ isActive }) => (isActive ? "link-active" : "link")}
      to="/quizmasters"
    >
      {" "}
      QuizMasters
    </NavLink>,
    "2"
  ),
  getItem(
    <NavLink
      className={({ isActive }) => (isActive ? "link-active" : "link")}
      to="/listofcandidates"
    >
      {" "}
      ListOfCandidates
    </NavLink>,
    "3"
  ),
  getItem(
    <NavLink
      className={({ isActive }) => (isActive ? "link-active" : "link")}
      to="/settings"
    >
      {" "}
      Settings
    </NavLink>,
    "4"
  ),
  getItem(
    <NavLink className="link" to="/billings">
      {" "}
      billings
    </NavLink>,
    "5"
  ),
];

const Sidebar = () => {
  //   const [collapsed, setCollapsed] = React.useState(false);

  //   const toggleCollapsed = () => {
  //     setCollapsed(!collapsed);
  //   };

  return (
    <div className="menu">
      <Menu className="sidemenu" mode="inline" theme="dark" items={items} />
    </div>
  );
};

export default Sidebar;
