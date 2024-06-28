import { useTodo, useUpdateTodo } from "@/entities/todos/models/todos";
import { Todo } from "./todos";

export type ViewModel = ReturnType<typeof useViewModelV2>;

const useTodosByCreatedAt = () => {
  const { todos } = useTodo();
  const todoController = new Todo(todos);

  const sortedData = todoController.sortDataByDate("내림차순");

  return { todos: todoController.groupByCreatedAt(sortedData) };
};

export const useViewModelV2 = () => {
  return {
    ...useTodosByCreatedAt(),
    ...useUpdateTodo()
  };
};
