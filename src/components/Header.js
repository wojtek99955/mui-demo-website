import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import styled from "styled-components";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserIcon = styled(AccountCircleOutlinedIcon)`
  color: white;
`;
const AddIcon = styled(AddCircleOutlineOutlinedIcon)`
  color: white;
`;
const StyledLink = styled(Link)`
  text-decoration: None;
  color: black;
`;

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={handleClick}>
          <UserIcon />
        </IconButton>
        <Menu
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <StyledLink to="/profile">
            <MenuItem onClick={handleClose}>Profile</MenuItem>
          </StyledLink>
          <StyledLink to="/edit-profile">
            <MenuItem onClick={handleClose}>Edit account</MenuItem>
          </StyledLink>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
