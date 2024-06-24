import { useTodo, useUpdateTodo } from "@/entities/todos/models/todos";

export type ViewModel = ReturnType<typeof useViewModelV1>;

export const useViewModelV1 = () => {
  return {
    ...useTodo(),
    ...useUpdateTodo()
  };
};
