import { useTodo, useUpdateTodo } from "@/entities/todos/models/todos";
import { Todo } from "./todos";

export type ViewModel = ReturnType<typeof useViewModelV2>;

const useTodosByCreatedAt = () => {
  const { todos } = useTodo();
  const groupBy = new Todo(todos);

  return { todos: groupBy.groupByCreatedAt() };
};

export const useViewModelV2 = () => {
  return {
    ...useTodosByCreatedAt(),
    ...useUpdateTodo()
  };
};
