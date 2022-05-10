import { useContext, useState } from "react";
import { Context } from "../../ContextProvider";
import {
  Card,
  Button,
  Typography,
  Stack,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import styled from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";

const UserIcon = styled(AccountCircleOutlinedIcon)``;
const StyledDeleteIcon = styled(DeleteIcon)`
  color: red;
  margin-right: 1rem;
`;

function PostList() {
  const ctx = useContext(Context);
  const { posts } = ctx;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleDelete(id) {
    const newList = posts.filter((post) => post.id !== id);
    ctx.setPosts(newList);
  }

  return (
    <>
      <Stack spacing={3} sx={{ maxWidth: "550px", margin: "auto" }}>
        {posts.map((post) => {
          return (
            <Card key={ctx.posts.id} sx={{ padding: "1rem" }}>
              <Stack
                direction="row"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ alignItems: "center" }}
                >
                  <UserIcon />
                  <Typography variant="h6">{`${post.name} ${post.surname}`}</Typography>
                </Stack>
                <Toolbar sx={{ ml: "auto" }}>
                  <IconButton onClick={handleClick}>
                    <MoreHorizIcon />
                  </IconButton>
                  <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        handleDelete(post.id);
                      }}
                    >
                      <StyledDeleteIcon />
                      Delete
                    </MenuItem>
                  </Menu>
                </Toolbar>
              </Stack>
              <Typography variant="p">{post.text}</Typography>
            </Card>
          );
        })}
      </Stack>
    </>
  );
}

export default PostList;
