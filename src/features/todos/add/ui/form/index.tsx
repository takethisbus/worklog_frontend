import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { TodoInput } from "./input";
import { AddButton } from "./button";
import { ViewModel } from "../../model";

export const TodoForm = (model: ViewModel) => {
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
      onSubmit={model.onSubmit}
    >
      <TodoInput value={model.value} onChange={model.onChange} />
      <AddButton />
    </Box>
  );
};
