import type { Todo as TodoType } from "@/shared/api/todos/models";
import dayjs from "dayjs";

interface GroupedTodo {
  [key: string]: TodoType[];
}

export class Todo {
  todos: TodoType[];
  constructor(todos: TodoType[]) {
    this.todos = todos;
  }

  public groupByCreatedAt() {
    const grouped = this.todos.reduce(
      (acc: GroupedTodo, currTodo: TodoType) => {
        const date = dayjs(currTodo.created_date).format("YYYY-MM-DD");

        if (!acc[date]) {
          acc[date] = [];
        }

        acc[date].push(currTodo);
        return acc;
      },
      {} as GroupedTodo
    );

    return Object.keys(grouped).map((date) => ({ [date]: grouped[date] }));
  }
}
