import { Document, Schema, SchemaType, model } from "mongoose";

export interface Todo extends Document {
  description: string;
  deadline: Date;
}

const schema = new Schema<Todo>({
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
});

export const TodoModel = model<Todo>("Todo", schema);

export const validateTodoInputs = (todoObj: any) => {
  const { description, deadline } = todoObj;

  const errorMessages: string[] = [];

  if (!description || description.length < 5) {
    errorMessages.push("Description must have at least 5 characters");
  }

  console.log(deadline);
  if (!deadline.match(/^\d{4}-\d{2}-\d{2}$/)) {
    const deadlineObj = new Date(deadline);
    console.log(deadlineObj);
    console.log(new Date());

    if (deadlineObj <= new Date()) {
      errorMessages.push("Deadline must be in future");
    }
  } else {
    errorMessages.push("Deadline must follow pattern YYYY-MM-DD");
  }

  return errorMessages;
};
