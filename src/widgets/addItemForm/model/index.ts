import { useCreateNote } from "@/entities/notes/models/notes";
import { useCreateTodo } from "@/entities/todos/models/todos";
import { FormEvent } from "react";

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

    noteUpdate(
      { title: noteTitle },
      {
        onSuccess: () => {
          form.reset();
        }
      }
    );

    todoUpdate(
      { title: todoTitle, completed: false },
      {
        onSuccess: () => {
          form.reset();
        }
      }
    );
  };

  return { onSubmit };
};
