import { Stack, Tooltip, IconButton } from "@mui/material";
import { Context } from "../../../ContextProvider";
import { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function ToolTips({ post }) {
  const ctx = useContext(Context);
  const { posts } = ctx;

  function handleDelete(id) {
    const newList = posts.filter((post) => post.id !== id);
    ctx.setPosts(newList);
  }

  const openEdditing = (id) => {
    const elementId = posts.findIndex((element) => element.id === id);
    const newArray = [...posts];
    newArray[elementId] = {
      ...newArray[elementId],
      edit: !newArray[elementId].edit,
    };
    ctx.setPosts(newArray);
  };
  return (
    <Stack direction="row" sx={{ marginLeft: "auto" }}>
      <Tooltip
        onClick={() => openEdditing(post.id)}
        sx={{ marginLeft: "auto" }}
        title="edit"
      >
        <IconButton>
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip
        sx={{ marginLeft: "auto" }}
        title="delete"
        onClick={() => handleDelete(post.id)}
      >
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export default ToolTips;
