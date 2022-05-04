import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import styled from "styled-components";

const StyledIcon = styled(AccountCircleOutlinedIcon)`
  color: white;
`;

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="small" edge="end">
          <StyledIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
