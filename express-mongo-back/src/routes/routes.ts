import { Router } from 'express';
import { catchErrors } from 'src/helpers/handlers';
import { addTodo, completeTodo, dropTodos, getTodos, removeTodo } from 'src/controllers/todoController';

export const router = Router();

router.get('/tasks', catchErrors(getTodos));

router.post('/add', catchErrors(addTodo));

router.patch('/complete', catchErrors(completeTodo));

router.delete('/remove', catchErrors(removeTodo));

router.delete('/removeAll', catchErrors(dropTodos));
