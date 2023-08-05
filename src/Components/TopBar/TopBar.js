import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import "./TopBar.css";
export default function TopBar() {
  return (
    <div className="topBar">
      <div className="topBar__left">
        <span className="tapBar__logo">Alireza</span>
      </div>

      <div className="topBar__right">
        <div className="topBar-iconContainer">
          <LanguageIcon />
          <span className="topIcon__Badge">2</span>
        </div>

        <div className="topBar-iconContainer">
          <NotificationsIcon />
          <span className="topIcon__Badge">2</span>
        </div>

        <div className="topBar-iconContainer">
          <SettingsIcon />
          <span className="topIcon__Badge">2</span>
        </div>
        <img src="logo192.png" className="imgLogo" alt="Avatar" />
      </div>
    </div>
  );
}
