import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

import "./SideBar.styles.scss";

const SideBarItem = ({ link, icon, text, isHome }) => {
  return (
    <NavLink activeClassName="active" className="icon-link nav-link" to={link}>
      <ListItem disablePadding>
        <ListItemButton className="menu-list-btn">
          <ListItemIcon className="menu-list-icon" sx={{ pr: 2 }}>
            {icon}
          </ListItemIcon>
          <ListItemText className="menu-list-text" primary={text} />
        </ListItemButton>
      </ListItem>
    </NavLink>
  );
};

export default SideBarItem;
