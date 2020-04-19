import { Request, Response } from 'express';
import { TodoModel } from 'src/models/Todo';

const getTodos = async (req: Request, res: Response) => {
  const todos = await TodoModel.find({});
  res.json({ todos });
};

const addTodo = async (req: Request, res: Response) => {
  const newTodo = new TodoModel({
    title: req.body.title,
  });
  await newTodo.save();
  res.status(200)
  res.json(newTodo)
};

const completeTodo = async (req: Request, res: Response) => {
  const todo = await TodoModel.findById(req.body.id);
  todo.isCompleted = true;
  await todo.save();
  res.status(200)
  res.json(todo)
};

const removeTodo = async (req: Request, res: Response) => {
  const todo = await TodoModel.findById(req.body.id);
  todo.remove();
  res.status(202)
  res.end();

};

const dropTodos = async (req: Request, res: Response) => {
  await TodoModel.deleteMany({});
  res.status(202)
  res.end();
};

export { getTodos, addTodo, completeTodo, removeTodo, dropTodos };
