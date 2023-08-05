import React from "react";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StorefrontIcon from "@mui/icons-material/Storefront";
import BarChartIcon from "@mui/icons-material/BarChart";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import "./SideBar.css";
export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBar__menu">
        <h3 className="sidebar__title">Dashboard</h3>
        <ul className="sidebar__list">
          <li className="SidebarList__item active">
            <LineStyleIcon className="sideBar__Icon" /> Home
          </li>
          <li className="SidebarList__item">
            <TimelineIcon className="sideBar__Icon" /> Analyses
          </li>
          <li className="SidebarList__item">
            <TrendingUpIcon className="sideBar__Icon" /> Sales
          </li>
        </ul>
      </div>

      <div className="sideBar__menu">
        <h3 className="sidebar__title">Quick Menu</h3>
        <ul className="sidebar__list">
          <li className="SidebarList__item">
            <PermIdentityIcon className="sideBar__Icon" /> Users
          </li>
          <li className="SidebarList__item">
            <StorefrontIcon className="sideBar__Icon" /> NewUsers
          </li>
          <li className="SidebarList__item">
            <AttachMoneyIcon className="sideBar__Icon" /> Products
          </li>
          <li className="SidebarList__item">
            <BarChartIcon className="sideBar__Icon" /> Transactions
          </li>
          <li className="SidebarList__item">
            <ReportIcon className="sideBar__Icon" /> Reports
          </li>
        </ul>
      </div>

      <div className="sideBar__menu">
        <h3 className="sidebar__title">Notifications</h3>
        <ul className="sidebar__list">
          <li className="SidebarList__item">
            <MailOutlineIcon className="sideBar__Icon" /> Mail
          </li>
          <li className="SidebarList__item">
            <DynamicFeedIcon className="sideBar__Icon" /> FeedBack
          </li>
          <li className="SidebarList__item">
            <ChatBubbleIcon className="sideBar__Icon" /> Message
          </li>
        </ul>
      </div>

      <div className="sideBar__menu">
        <h3 className="sidebar__title">Dashboard</h3>
        <ul className="sidebar__list">
          <li className="SidebarList__item">
            <LineStyleIcon className="sideBar__Icon" /> Manage
          </li>
          <li className="SidebarList__item">
            <WorkOutlineIcon className="sideBar__Icon" /> Analytics
          </li>
          <li className="SidebarList__item">
            <ReportIcon className="sideBar__Icon" /> Reports
          </li>
        </ul>
      </div>
    </div>
  );
}
