import { NoteListItem } from "@/features/notes/list/ui/item";
import { TodoListItem } from "@/features/todos/list/ui/item";
import { Empty } from "@/shared/ui/Empty";
import { List, ListItem, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ViewModel } from "../model/viewModel";
import type { Note } from "@/shared/api/notes/models";
import type { Todo } from "@/shared/api/todos/models";

interface Props {
  todosNotes: (Todo | Note)[];
}

const TodoNoteList = ({ todosNotes }: Props) => {
  return (
    <List>
      {todosNotes?.map((item) => {
        if ("completed" in item) {
          return (
            <TodoListItem
              key={item.id}
              completed={item.completed}
              title={item.title}
              id={item.id}
            />
          );
        } else {
          return <NoteListItem key={item.id} id={item.id} title={item.title} />;
        }
      })}
    </List>
  );
};

export const TodoWithNote = ({ todosNotes, ...props }: ViewModel) => {
  if (!todosNotes.length) {
    return <Empty>현재 등록된 할일이 없습니다</Empty>;
  }

  return (
    <List>
      {todosNotes.map((items) => {
        const date = Object.keys(items)[0];
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
            <TodoNoteList todosNotes={items[date]} {...props} />
          </ListItem>
        );
      })}
    </List>
  );
};
