import { Empty } from "@/shared/ui/Empty";
import { List, ListItem, Typography } from "@mui/material";
import { ViewModel } from "../model/viewModel_v2";
import { ViewModel as ViewModelV1 } from "../model/viewModel_v1";
import { grey } from "@mui/material/colors";
import { Todo } from "@/shared/api/todos/models";
import { TodoListItem } from "./item";

const TodoList = (model: ViewModelV1) => {
  return (
    <List>
      {model.todos.map((item) => (
        <TodoListItem {...item} />
      ))}
    </List>
  );
};

export const TodoByDate = ({ todos, ...props }: ViewModel) => {
  if (!todos.length) {
    return <Empty>현재 등록된 할일이 없습니다</Empty>;
  }

  return (
    <List>
      {todos.map((todo) => {
        const date = Object.keys(todo)[0];
        return (
          <ListItem
            key={date}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch"
            }}
          >
            <Typography
              variant="body1"
              component="h5"
              sx={{
                fontWeight: "medium",
                paddingBottom: "4px",
                borderBottom: `1px solid ${grey[300]}`
              }}
            >
              {date}
            </Typography>
            <TodoList todos={todo[date] as Todo[]} {...props} />
          </ListItem>
        );
      })}
    </List>
  );
};
