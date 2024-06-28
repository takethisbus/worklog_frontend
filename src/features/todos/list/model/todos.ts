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

  public groupByCreatedAt(data: TodoType[]): { [key: string]: TodoType[] }[] {
    const grouped = data.reduce<GroupedTodo>((acc, currTodo) => {
      const date = dayjs(currTodo.created_date).format("YYYY-MM-DD");

      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date].push(currTodo);
      return acc;
    }, {});

    return Object.keys(grouped).map((date) => ({ [date]: grouped[date] }));
  }

  public sortDataByDate(sorting: "내림차순" | "오름차순") {
    const sortedData = this.todos.sort((a, b) => {
      if (sorting === "내림차순") {
        return dayjs(a.created_date).isBefore(dayjs(b.created_date)) ? 1 : -1;
      }

      return dayjs(a.created_date).isAfter(dayjs(b.created_date)) ? 1 : -1;
    });

    return sortedData;
  }
}
