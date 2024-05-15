import { todos } from "@/shared/api/todos";
import { queryOptions } from "@tanstack/react-query";

export const todosQueryOptions = {
  todos: queryOptions({
    queryKey: ["todos"],
    queryFn: () => todos.get()
  }),
  createTodo: {
    mutationFn: todos.create
  },
  updateTodo: {
    mutationFn: todos.updateDetail
  },
  deleteTodo: {
    mutationFn: todos.deleteDetail
  }
};
