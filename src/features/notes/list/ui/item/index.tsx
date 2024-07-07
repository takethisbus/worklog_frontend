import { Box, ListItem, debounce } from "@mui/material";
import { grey } from "@mui/material/colors";

import { NoteDeleteButton } from "../../../delete";
import { Note } from "@/shared/api/notes/models";
import { useUpdateNote } from "@/entities/notes/models/notes";
import { NoteInput } from "../input";
import { ChangeEvent } from "react";

interface Props {
  title: Note["title"];
  id: Note["id"];
}

export const NoteListItem = ({ title, id }: Props) => {
  const { mutate } = useUpdateNote();

  const handleChange = debounce((event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    mutate({
      id,
      payload: {
        title: value
      }
    });
  }, 1000);

  return (
    <ListItem
      style={{
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: grey[50],
        borderRadius: 4,
        padding: 16
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start"
        }}
      >
        <NoteInput defaultValue={title} onChange={handleChange} />
        <NoteDeleteButton id={id} />
      </Box>
    </ListItem>
  );
};
