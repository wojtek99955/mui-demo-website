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

const links = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    text: "Settings",
    icon: <SettingsIcon />,
  },
  {
    text: "Help",
    icon: <HelpIcon />,
  },
];

function SideMenu() {
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
            <ListItem button>
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
