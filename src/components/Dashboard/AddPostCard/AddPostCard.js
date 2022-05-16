import { Card, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AddPostCard() {
  let navigate = useNavigate();
  return (
    <Card sx={{ height: "100%", display: "flex" }}>
      <Button
        variant="contained"
        sx={{ margin: "auto" }}
        onClick={() => navigate("/posts")}
      >
        Add Post
      </Button>
    </Card>
  );
}

export default AddPostCard;
