import { validate as uuidValidate } from "uuid";

import { createToDo } from "./factories";

describe("test createToDo", () => {
  it("should return a new ToDo object", () => {
    const toDo = createToDo({ description: "create a ToDo app" });
    expect(toDo.description).toBe("create a ToDo app");
    expect(toDo.status).toBe("OPEN");
    expect(uuidValidate(toDo.id)).toBe(true);
  });
});
