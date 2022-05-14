import styled from "styled-components";
import { Button, Typography, Stack, Card, Divider, Grid } from "@mui/material";
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
    <Grid container spacing={3} sx={{ padding: "3rem" }}>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
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
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ height: "100%" }}>
          <Button>Add Post</Button>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ height: "100%" }}>
          <h3>Posts</h3>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ height: "100%" }}>
          <h3>Card</h3>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
