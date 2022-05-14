import styled from "styled-components";
import { Button, Typography, Stack, Card, Divider } from "@mui/material";
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
      <Card
        sx={{
          width: "100%",
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" align="center">
          Welcome {fname}
        </Typography>
        <Avatar sx={{ fontSize: "5rem" }} />
        <Divider />
        <StyledLink to="/profile">
          <Button>My profile</Button>
        </StyledLink>
      </Card>
    </div>
  );
}

export default Dashboard;
