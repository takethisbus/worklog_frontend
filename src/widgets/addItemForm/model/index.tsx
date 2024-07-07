import { useCreateNote } from "@/entities/notes/models/notes";
import { useCreateTodo } from "@/entities/todos/models/todos";
import { Typography } from "@mui/material";
import { FormEvent } from "react";
import { toast } from "react-toastify";

export type ViewModel = ReturnType<typeof useViewModelForm>;

export const useViewModelForm = () => {
  const { mutate: todoUpdate } = useCreateTodo();
  const { mutate: noteUpdate } = useCreateNote();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const todoTitle = formData.get("todoTitle")?.toString() ?? "";
    const noteTitle = formData.get("noteTitle")?.toString() ?? "";

    if (!todoTitle && !noteTitle) {
      toast.error(
        <Typography variant="body2">
          <b>할 일</b>이나 <b>메모</b> 중 하나를 입력해 주세요!
        </Typography>
      );
    }

    if (noteTitle) {
      noteUpdate(
        { title: noteTitle },
        {
          onSuccess: () => {
            form.reset();
          }
        }
      );
    }

    if (todoTitle) {
      todoUpdate(
        { title: todoTitle, completed: false },
        {
          onSuccess: () => {
            form.reset();
          }
        }
      );
    }
  };

  return { onSubmit };
};
