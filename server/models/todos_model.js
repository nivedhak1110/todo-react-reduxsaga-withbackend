import mongoose from "mongoose";

const todosSchema = mongoose.Schema({
  id: Number,
  value: String,
  dateValue: String,
  statusValue: String,
});
const TodosModel = mongoose.model("todo", todosSchema);

export default TodosModel;
