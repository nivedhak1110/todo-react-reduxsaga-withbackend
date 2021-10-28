import express from "express";
import mongoose from "mongoose";

import TodosModel from "../models/todos_model.js";

const router = express.Router();

export const getTodos = async (req, res) => {
  try {
    console.log("req received");

    const todos = await TodosModel.find({});
    console.log(todos);
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addTodo = async (req, res) => {
  console.log(req.body);
  const { id, value, dateValue, statusValue } = req.body;

  const newTodosModel = new TodosModel({
    id,
    value,
    dateValue,
    statusValue,
  });

  try {
    await newTodosModel.save();

    res.status(201).json(newTodosModel);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === "all") {
      const deleteAllTodo = await TodosModel.deleteMany({});
      res.send(deleteAllTodo);
    } else {
      const deleteTodo = await TodosModel.deleteOne({
        id,
      });
      res.send(deleteTodo);
    }
  } catch (err) {
    res.status(409).json({ message: error.message });
  }
};

export default router;
