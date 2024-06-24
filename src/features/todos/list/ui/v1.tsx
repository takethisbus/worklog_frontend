import { Empty } from "@/shared/ui/Empty";
import { List, ListItem } from "@mui/material";
import { TodoItem } from "@/entities/todos/ui/item";
import { ViewModel } from "../model/viewModel_v1";
import { TodoDeleteButton } from "../../delete";

export const TodoList = (model: ViewModel) => {
  if (!model.todos.length) {
    return <Empty>현재 등록된 할일이 없습니다</Empty>;
  }

  return (
    <List>
      {model.todos.map(({ completed, title, id }) => (
        <ListItem
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
          sx={{ padding: "8px 0" }}
          key={id}
        >
          <TodoItem
            completed={completed}
            title={title}
            onChange={(event) =>
              model.mutate({
                id,
                payload: { title, completed: event.target.checked }
              })
            }
          />
          <TodoDeleteButton id={id} />
        </ListItem>
      ))}
    </List>
  );
};
