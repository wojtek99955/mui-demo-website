import styled from "styled-components";
import { Box, Typography, Stack, Card, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../ContextProvider";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const Avatar = styled(AccountCircleOutlinedIcon)`
  width: 2rem;
`;

function Dashboard() {
  const context = useContext(Context);
  const {
    userData: { fname },
  } = context;
  return (
    <div>
      <Card sx={{ width: "100%", border: "1px solid red", marginTop: "1rem" }}>
        <Typography variant="h4" component="h1" align="center">
          Welcome {fname}
        </Typography>
        <Avatar sx={{ fontSize: "5rem" }} />
        <Divider />
      </Card>
    </div>
  );
}

export default Dashboard;
