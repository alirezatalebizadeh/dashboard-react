import React from "react";
import { Link } from "react-router-dom";
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
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';





import "./SideBar.css";
export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBar__menu">
        <h3 className="sidebar__title">Dashboard</h3>
        <ul className="sidebar__list">
          <Link className="link" to="/">
            <li className="SidebarList__item active">
              <LineStyleIcon className="sideBar__Icon" /> Home
            </li>
          </Link>
          <Link className="link" to='/todos'>
            <li className="SidebarList__item">
              <TimelineIcon className="sideBar__Icon" /> Analyses
            </li>
          </Link>
          <Link className="link">
            <li className="SidebarList__item">
              <TrendingUpIcon className="sideBar__Icon" /> Sales
            </li>
          </Link>
        </ul>
      </div>

      <div className="sideBar__menu">
        <h3 className="sidebar__title">Quick Menu</h3>
        <ul className="sidebar__list">
          <Link to="/users" className="link">
            <li className="SidebarList__item">
              <PermIdentityIcon className="sideBar__Icon" /> Users
            </li>
          </Link>

          <Link to="/newUser" className="link">
            <li className="SidebarList__item">
              <StorefrontIcon className="sideBar__Icon" /> NewUsers
            </li>
          </Link>

          <Link to="/products" className="link">
            <li className="SidebarList__item">
              <AttachMoneyIcon className="sideBar__Icon" /> Products
            </li>
          </Link>

          <Link className="link">
            <li className="SidebarList__item">
              <BarChartIcon className="sideBar__Icon" /> Transactions
            </li>
          </Link>
          <Link className="link">
            <li className="SidebarList__item">
              <ReportIcon className="sideBar__Icon" /> Reports
            </li>
          </Link>
        </ul>
      </div>

      <div className="sideBar__menu">
        <h3 className="sidebar__title">Notifications</h3>
        <ul className="sidebar__list">
          <Link to='/menus' className="link">
            <li className="SidebarList__item">
              <RestaurantMenuIcon className="sideBar__Icon" /> Menus
            </li>
          </Link>
          <Link className="link">
            <li className="SidebarList__item">
              <DynamicFeedIcon className="sideBar__Icon" /> FeedBack
            </li>
          </Link>
          <Link className="link">
            <li className="SidebarList__item">
              <ChatBubbleIcon className="sideBar__Icon" /> Message
            </li>
          </Link>
        </ul>
      </div>

      <div className="sideBar__menu">
        <h3 className="sidebar__title">Dashboard</h3>
        <ul className="sidebar__list">
          <Link className="link">
            <li className="SidebarList__item">
              <LineStyleIcon className="sideBar__Icon" /> Manage
            </li>
          </Link>
          <Link className="link">
            <li className="SidebarList__item">
              <WorkOutlineIcon className="sideBar__Icon" /> Analytics
            </li>
          </Link>
          <Link className="link">
            <li className="SidebarList__item">
              <ReportIcon className="sideBar__Icon" /> Reports
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
