import { API } from "../base";
import { CreateNoteResponse, Note, NotePayload } from "./models";

const BASE_URL = "/api/v1/notes";

export const notes = {
  get: () => API.get<Note[]>(BASE_URL),
  create: (payload: NotePayload) =>
    API.post<CreateNoteResponse>(BASE_URL, payload),
  getDetail: (id: Note["id"]) => API.get<Note>(`${BASE_URL}/${id}`),
  updateDetail: (id: Note["id"], payload: NotePayload) =>
    API.put<CreateNoteResponse>(`${BASE_URL}/${id}`, payload),
  deleteDetail: (id: Note["id"]) => API.delete<boolean>(`${BASE_URL}/${id}`)
};
