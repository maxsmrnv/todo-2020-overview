import { Schema, model, Document } from 'mongoose';
import { MongoError } from 'mongodb';
import { HttpError } from 'src/helpers/HttpError';

export interface Todo extends Document {
  title: string;
  isCompleted: boolean;
}

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

schema.post('validate', (error: MongoError, doc: Document, next: Function) => {
  next(new HttpError(400, `Bad request: ${error.message}`));
});

schema.post('findOne', (todo: Todo | null, next: Function) => {
  if (todo) {
    next();
  } else {
    next(new HttpError(404, 'Todo not found'));
  }
});

schema.post('findOne', (error: MongoError, doc: Document, next: Function) => {
  next(new HttpError(404, 'Todo not found'));
});

export const TodoModel = model<Todo>('Todo', schema);
