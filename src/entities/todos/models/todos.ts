import {
  QueryClient,
  useMutation,
  useQueryClient,
  useSuspenseQuery
} from "@tanstack/react-query";
import { todosQueryOptions } from "../api/queries";

export const useTodo = () => {
  const todosQuery = useSuspenseQuery(todosQueryOptions.todos);
  return { todos: todosQuery.data };
};

const invalidateTodos = (queryClient: QueryClient) =>
  queryClient.invalidateQueries({
    queryKey: todosQueryOptions.todos.queryKey
  });

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    ...todosQueryOptions.createTodo,
    onSuccess: () => invalidateTodos(queryClient)
  });
  return mutate;
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    ...todosQueryOptions.updateTodo,
    onSuccess: () => invalidateTodos(queryClient)
  });
  return mutate;
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    ...todosQueryOptions.deleteTodo,
    onSuccess: () => invalidateTodos(queryClient)
  });
  return mutate;
};
