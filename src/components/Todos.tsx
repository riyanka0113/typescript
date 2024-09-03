import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import style from './Todos.module.css'

//fc => functional component
const Todos = () => {
    const todosCtx = useContext(TodosContext);
    return(
        <ul className={style.todos}>
           {todosCtx.items.map((item) => (
               <TodoItem key={item.id} text= {item.text} onRemove={todosCtx.removeTodo.bind(null, item.id)}/>
           ))}
        </ul>
    )
}

export default Todos;