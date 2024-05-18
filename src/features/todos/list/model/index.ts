import { useTodo, useUpdateTodo } from "@/entities/todos/models/todos";

export type ViewModel = ReturnType<typeof useViewModel>;

export const useViewModel = () => {
  return {
    ...useTodo(),
    ...useUpdateTodo()
  };
};
