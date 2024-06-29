import { useUpdateTodo } from "@/entities/todos/models/todos";
import { TodoItem } from "@/entities/todos/ui/item";
import { TodoDeleteButton } from "@/features/todos/delete";
import { Todo } from "@/shared/api/todos/models";
import { ListItem } from "@mui/material";

interface Props {
  completed: Todo["completed"];
  title: Todo["title"];
  id: Todo["id"];
}

export const TodoListItem = ({ completed, title, id }: Props) => {
  const { mutate } = useUpdateTodo();

  return (
    <ListItem
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
      sx={{ padding: "8px 0" }}
    >
      <TodoItem
        completed={completed}
        title={title}
        onChange={(event) =>
          mutate({
            id,
            payload: {
              title: title,
              completed: event.target.checked
            }
          })
        }
      />
      <TodoDeleteButton id={id} />
    </ListItem>
  );
};
