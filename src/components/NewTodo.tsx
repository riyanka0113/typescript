import { useContext } from "react";
import { useRef } from "react";
import { TodosContext } from "../store/todos-context";
import style from './NewTodo.module.css'

const NewTodo = () => {
    const todosCtx = useContext(TodosContext);

    const todoTextRf = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const eneterdText = todoTextRf.current!.value;

        if(eneterdText.trim().length === 0){
            return;
        }

        todosCtx.addTodo(eneterdText);

        todoTextRf.current!.value = "";
    }
    return(
        <form className={style.form} onSubmit={submitHandler}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" ref={todoTextRf}/>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;