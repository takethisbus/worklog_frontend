import { todosQueryOptions } from "@/entities/todos/api/queries";
import { Home } from "@/pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(todosQueryOptions.todos),
  component: Home
});
