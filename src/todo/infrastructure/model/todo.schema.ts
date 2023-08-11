import { Schema, model } from "mongoose";

const TodoSchema = new Schema(
  {
    task: {
      type: String,
    },
    active: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const TodoModel = model("Todo", TodoSchema);

export default TodoModel;
