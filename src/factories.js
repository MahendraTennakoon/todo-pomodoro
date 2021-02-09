import { v4 as uuid } from "uuid";

export const createToDo = ({ description }) => ({
  id: uuid(),
  status: "OPEN",
  description,
});
