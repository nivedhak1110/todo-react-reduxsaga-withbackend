import express from "express";
import { addTodo, deleteTodo, getTodos } from "../controllers/todos.js";
const router = express.Router();
// const router = express.Router();
// router.get("/", (req, res) => {
//   res.send("working");
// });

router.get("/", getTodos);
router.post("/", addTodo);
router.delete("/:id", deleteTodo);
//router.delete("/:id", deleteAllTodos);

export default router;
