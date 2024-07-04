import { Todo, TodoModel } from "../domains/TodoModel";

export default class TodoDAO {


    async save(todo: Todo) {
        const savedTodo = await TodoModel.create(todo);
        return savedTodo;
    }
}