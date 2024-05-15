import { API } from "../base";
import { CreateTodoResponse, Todo, TodoPayload } from "./models";

const BASE_URL = "/api/v2/todos";

export const todos = {
  get: () => API.get<Todo[]>(BASE_URL),
  create: (payload: TodoPayload) =>
    API.post<CreateTodoResponse>(BASE_URL, payload),
  getDetail: (id: Todo["id"]) => API.get<Todo>(`${BASE_URL}/${id}`),
  updateDetail: (id: Todo["id"], payload: TodoPayload) =>
    API.put<CreateTodoResponse>(`${BASE_URL}/${id}`, payload),
  deleteDetail: (id: Todo["id"]) => API.delete<boolean>(`${BASE_URL}/${id}`)
};
