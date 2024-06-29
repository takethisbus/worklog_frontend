import type { Note } from "@/shared/api/notes/models";
import type { Todo } from "@/shared/api/todos/models";
import dayjs from "dayjs";

interface GroupedTodo {
  [key: string]: (Todo | Note)[];
}

export class TodoDate {
  todos: (Todo | Note)[];
  constructor(todos: (Todo | Note)[]) {
    this.todos = todos;
  }

  public groupByCreatedAt(data: (Todo | Note)[]): GroupedTodo[] {
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
