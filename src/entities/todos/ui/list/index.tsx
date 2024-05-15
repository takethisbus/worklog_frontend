import { TodoItem } from "../item";
import { useTodo } from "../../models/todos";
import { Empty } from "@/shared/ui/Empty";
import { DeleteButton } from "../delete";
import { List, ListItem } from "@mui/material";

export const TodoList = () => {
  const { todos } = useTodo();

  if (!todos.length) {
    return <Empty>현재 등록된 할일이 없습니다</Empty>;
  }

  return (
    <List>
      {todos.map(({ completed, title, id }) => (
        <ListItem
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
          key={id}
        >
          <TodoItem defaultChecked={completed} label={title} id={id} />
          <DeleteButton id={id} />
        </ListItem>
      ))}
    </List>
  );
};
