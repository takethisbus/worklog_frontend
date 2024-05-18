import { useCreateTodo } from "@/entities/todos/models/todos";
import { ChangeEvent, FormEvent, useState } from "react";

export type ViewModel = ReturnType<typeof useViewModelForm>;

export const useViewModelForm = () => {
  const { mutate } = useCreateTodo();
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    mutate(
      { title: value, completed: false },
      {
        onSuccess: () => {
          setValue("");
        }
      }
    );
  };

  return { onChange, onSubmit, value };
};
