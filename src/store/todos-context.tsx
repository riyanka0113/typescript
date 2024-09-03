import React, { useState } from "react";
import { createContext } from "react";
import Todo from "../model/todo";

type todosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
};

export const TodosContext = createContext<todosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: number) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };

  const removeHandler = (id: number) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: todosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
