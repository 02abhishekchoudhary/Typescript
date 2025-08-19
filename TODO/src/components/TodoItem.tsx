import { Button, Checkbox, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";

type PropsType = {
  todo: TodoItemType;
  deleteHandler: (id: TodoItemType["id"]) => void;
  completeHandler: (id: TodoItemType["id"]) => void;
};

const TodoItem = ({ todo, deleteHandler, completeHandler }: PropsType) => {
  const [editActive, setEditActive] = useState<boolean>(false);

  return (
    <Paper sx={{ padding: "1rem" }}>
      <Stack direction={"row"} alignItems={"center"}>
        <Typography marginRight={"auto"}>{todo.title}</Typography>
        <Checkbox
          checked={todo.isCompleted}
          onChange={() => completeHandler(todo.id)}
        />
        <Button onClick={() => deleteHandler(todo.id)} sx={{ color: "black" }}>
          🗑️
        </Button>
        <Button onClick={() => setEditActive((prev) => !prev)}>✏️</Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;
