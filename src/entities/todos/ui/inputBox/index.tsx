import { Box, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { grey } from "@mui/material/colors";
import { useCreateTodo } from "../../models/todos";
import { FormEvent, useState } from "react";

export const InputBox = () => {
  const { mutate } = useCreateTodo();
  const [value, setValue] = useState("");
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      sx={{
        border: `1px solid ${grey[300]}`,
        borderRadius: 4,
        p: 2
      }}
      component="form"
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const title = formData.get("title")?.toString() || "";

        mutate(
          { title, completed: false },
          {
            onSuccess: () => {
              setValue("");
            }
          }
        );
      }}
    >
      <TextField
        variant="standard"
        name="title"
        placeholder="오늘의 할일을 입력하세요"
        required
        value={value}
        onChange={(event) => setValue(event.target.value)}
        InputProps={{
          disableUnderline: true
        }}
      />
      <Box display="flex" justifyContent="flex-end">
        <Button
          type="submit"
          variant="contained"
          startIcon={<AddIcon />}
          color="primary"
          sx={{
            boxShadow: "none"
          }}
        >
          추가하기
        </Button>
      </Box>
    </Box>
  );
};
