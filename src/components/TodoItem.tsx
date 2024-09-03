import style from './TodoItem.module.css';
const TodoItem: React.FC<{text:string, onRemove: () => void}> = (props) => {
    return(
        <li className={style.item} onClick={props.onRemove}>{props.text}</li>
    )
}

export default TodoItem;