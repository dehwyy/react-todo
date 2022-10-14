import React, {useContext} from 'react';
import {todoListProps} from "../interfaces";
import {TodoContext} from "../context";

const TodoList:React.FC = () => {
    const {todos, onRemove, onCheck} = useContext<todoListProps>(TodoContext)
    return (
        <div>{todos.map(todo => {
            let clsTitle:string[] = ["todo-title"]
            let clsTodo: string[] = ["todo"]
            if (todo.title.split(' ')[0].length > window.innerWidth / 48) {
                clsTitle.push("todo-title-break")
            }
            if (todo.completed) {
                clsTodo.push("todo-completed")
            }
            return <div key={todo.id} className={"p50m50 " + clsTodo.join(' ')}>
                <label style={{margin: "0 0 -7px 0"}}>
                    <input checked={todo.completed}
                        onChange={() => onCheck(todo.id)}
                        type="checkbox"/>
                    <span></span>
                </label>
                <div className={clsTitle.join(' ')}>
                    {todo.title}
                </div>
                <button
                    onClick={() => onRemove(todo.id)}
                    className="waves-effect waves-light btn blue darken-3">remove
                    <i className="material-icons">delete_forever</i>
                </button>
            </div>
        })}</div>
    );
};

export default TodoList;