import { Button } from "@mui/material";
import { useDeleteTodo } from "../../models/todos";

interface Props {
  id: string;
}

export const DeleteButton = ({ id }: Props) => {
  const { mutate } = useDeleteTodo();

  return (
    <Button
      variant="contained"
      size="small"
      color="error"
      sx={{ boxShadow: "none" }}
      onClick={() => mutate(id)}
    >
      삭제
    </Button>
  );
};
