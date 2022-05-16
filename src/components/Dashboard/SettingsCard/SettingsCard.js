import { Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import styled from "styled-components";

const StyledSettingsIcon = styled(SettingsIcon)`
  color: grey;
`;

function SettingsCard() {
  let navigate = useNavigate();

  return (
    <Card
      sx={{ height: "100%", display: "flex", cursor: "pointer" }}
      onClick={() => navigate("/settings")}
    >
      <StyledSettingsIcon sx={{ fontSize: "5rem", margin: "auto" }} />
      <Typography variant="h3" component="h3" sx={{ margin: "auto" }}>
        Settings
      </Typography>
    </Card>
  );
}

export default SettingsCard;
