import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styled from "styled-components";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

const links = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },
  {
    text: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
  },
  {
    text: "Help",
    icon: <HelpIcon />,
    path: "/help",
  },
];

function SideMenu() {
  const navigate = useNavigate();
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      PaperProps={{
        style: {
          width: "15rem",
          height: "100vh",
          position: "relative",
        },
      }}
    >
      <List>
        {links.map((link) => {
          return (
            <ListItem button onClick={() => navigate(link.path)}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}

export default SideMenu;
