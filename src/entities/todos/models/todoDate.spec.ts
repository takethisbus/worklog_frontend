import { describe, expect, it } from "vitest";
import { TODO_MOCK } from "@/entities/todos/models/mock";
import { TodoDate } from "./todoDate";

describe("TodoGroupBy", () => {
  const todoController = new TodoDate(TODO_MOCK);

  it("groupByCreatedAt: 생성 날짜에 따라 객체가 구성되어야한다", () => {
    expect(todoController.groupByCreatedAt(TODO_MOCK)).toEqual([
      {
        "2024-05-15": [
          {
            completed: false,
            created_date: "2024-05-15T14:27:25.039000",
            id: "6644c64d97dcffba5bfc61cb",
            title: "테스트",
            updated_date: "2024-05-18T07:52:39.560000"
          },
          {
            completed: false,
            created_date: "2024-05-15T14:27:27.604000",
            id: "6644c64f97dcffba5bfc61cc",
            title: "테스트2",
            updated_date: "2024-05-18T09:46:44.761000"
          }
        ]
      },
      {
        "2024-05-18": [
          {
            completed: true,
            created_date: "2024-05-18T09:44:12.706000",
            id: "6648786ce5d3eb2cb55f0f32",
            title: "테스트3",
            updated_date: "2024-05-18T09:46:47.100000"
          },
          {
            completed: true,
            created_date: "2024-05-18T09:44:17.102000",
            id: "66487871e5d3eb2cb55f0f33",
            title: "테스트4",
            updated_date: "2024-06-24T14:29:25.704000"
          }
        ]
      }
    ]);
  });

  it("sortDataByDate: 내림차순대로 정력되어야한다", () => {
    const sortedData = todoController.sortDataByDate("내림차순");
    expect(sortedData).toEqual([
      {
        completed: true,
        created_date: "2024-05-18T09:44:17.102000",
        id: "66487871e5d3eb2cb55f0f33",
        title: "테스트4",
        updated_date: "2024-06-24T14:29:25.704000"
      },
      {
        completed: true,
        created_date: "2024-05-18T09:44:12.706000",
        id: "6648786ce5d3eb2cb55f0f32",
        title: "테스트3",
        updated_date: "2024-05-18T09:46:47.100000"
      },
      {
        completed: false,
        created_date: "2024-05-15T14:27:27.604000",
        id: "6644c64f97dcffba5bfc61cc",
        title: "테스트2",
        updated_date: "2024-05-18T09:46:44.761000"
      },
      {
        completed: false,
        created_date: "2024-05-15T14:27:25.039000",
        id: "6644c64d97dcffba5bfc61cb",
        title: "테스트",
        updated_date: "2024-05-18T07:52:39.560000"
      }
    ]);
  });

  it("sortDataByDate: 내림 차순으로 정렬한 데이터가 생성 날짜에 따라 객체가 구성되어야한다", () => {
    const sortedData = todoController.sortDataByDate("내림차순");
    expect(todoController.groupByCreatedAt(sortedData)).toEqual([
      {
        "2024-05-18": [
          {
            completed: true,
            created_date: "2024-05-18T09:44:17.102000",
            id: "66487871e5d3eb2cb55f0f33",
            title: "테스트4",
            updated_date: "2024-06-24T14:29:25.704000"
          },
          {
            completed: true,
            created_date: "2024-05-18T09:44:12.706000",
            id: "6648786ce5d3eb2cb55f0f32",
            title: "테스트3",
            updated_date: "2024-05-18T09:46:47.100000"
          }
        ]
      },
      {
        "2024-05-15": [
          {
            completed: false,
            created_date: "2024-05-15T14:27:27.604000",
            id: "6644c64f97dcffba5bfc61cc",
            title: "테스트2",
            updated_date: "2024-05-18T09:46:44.761000"
          },
          {
            completed: false,
            created_date: "2024-05-15T14:27:25.039000",
            id: "6644c64d97dcffba5bfc61cb",
            title: "테스트",
            updated_date: "2024-05-18T07:52:39.560000"
          }
        ]
      }
    ]);
  });

  it("sortDataByDate: 오름차순대로 정력되어야한다", () => {
    const sortedData = todoController.sortDataByDate("오름차순");
    expect(sortedData).toEqual(TODO_MOCK);
  });

  it("sortDataByDate: 오름차순으로 정렬한 데이터가 생성 날짜에 따라 객체가 구성되어야한다", () => {
    const sortedData = todoController.sortDataByDate("오름차순");
    expect(todoController.groupByCreatedAt(sortedData)).toEqual([
      {
        "2024-05-15": [
          {
            completed: false,
            created_date: "2024-05-15T14:27:25.039000",
            id: "6644c64d97dcffba5bfc61cb",
            title: "테스트",
            updated_date: "2024-05-18T07:52:39.560000"
          },
          {
            completed: false,
            created_date: "2024-05-15T14:27:27.604000",
            id: "6644c64f97dcffba5bfc61cc",
            title: "테스트2",
            updated_date: "2024-05-18T09:46:44.761000"
          }
        ]
      },
      {
        "2024-05-18": [
          {
            completed: true,
            created_date: "2024-05-18T09:44:12.706000",
            id: "6648786ce5d3eb2cb55f0f32",
            title: "테스트3",
            updated_date: "2024-05-18T09:46:47.100000"
          },
          {
            completed: true,
            created_date: "2024-05-18T09:44:17.102000",
            id: "66487871e5d3eb2cb55f0f33",
            title: "테스트4",
            updated_date: "2024-06-24T14:29:25.704000"
          }
        ]
      }
    ]);
  });
});
