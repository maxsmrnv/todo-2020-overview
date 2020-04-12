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
  res.redirect('/');
};

const completeTodo = async (req: Request, res: Response) => {
  const todo = await TodoModel.findById(req.body.id);
  todo.isCompleted = true;
  await todo.save();
  res.redirect('/');
};

const removeTodo = async (req: Request, res: Response) => {
  const todo = await TodoModel.findById(req.body.id);
  todo.remove();
  res.redirect('/');
};

const dropTodos = async (req: Request, res: Response) => {
  await TodoModel.deleteMany({});
  res.redirect('/');
};

export { getTodos, addTodo, completeTodo, removeTodo, dropTodos };
