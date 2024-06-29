import { Empty } from "@/shared/ui/Empty";
import { List } from "@mui/material";
import { ViewModel } from "../model/viewModel_v1";
import { TodoListItem } from "./item";

export const TodoList = (model: ViewModel) => {
  if (!model.todos.length) {
    return <Empty>현재 등록된 할일이 없습니다</Empty>;
  }

  return (
    <List>
      {model.todos.map(({ completed, title, id }) => (
        <TodoListItem completed={completed} title={title} id={id} />
      ))}
    </List>
  );
};
