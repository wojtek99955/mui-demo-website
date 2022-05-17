import { TextField, Button, Typography } from "@mui/material";
import { useState, useContext } from "react";
import { Context } from "../../../ContextProvider";

function Edit({ post }) {
  const ctx = useContext(Context);
  const { posts } = ctx;
  const [editedValue, setEditedValue] = useState("");
  const editOnChange = (e) => {
    setEditedValue(e.target.value);
  };

  const handleAddChange = (id) => {
    const elementId = posts.findIndex((element) => element.id === id);
    const newArray = [...posts];
    newArray[elementId] = {
      ...newArray[elementId],
      text: editedValue,
      edit: false,
    };
    ctx.setPosts(newArray);
  };
  return (
    <div>
      {post.edit ? (
        <>
          <TextField
            onChange={editOnChange}
            fullWidth
            defaultValue={post.text}
            multiline
            autoFocus
          />
          <Button
            onClick={() => {
              handleAddChange(post.id);
            }}
          >
            Save
          </Button>
        </>
      ) : (
        <Typography variant="p">{post.text}</Typography>
      )}
    </div>
  );
}

export default Edit;
