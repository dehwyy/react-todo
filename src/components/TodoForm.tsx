import React, {useState} from 'react';
import {todoFormProps} from "../interfaces";
import TodoList from "./TodoList";

const TodoForm:React.FC<todoFormProps> = ({onButton}) => {
    const [value, setValue] = useState<string>('')

    return (<>
        <div className={"input-field p50m50"}>
            <input onChange={(event) => setValue(event.target.value)} value={value} type="text" id={"formInput"}/>
            <label htmlFor={"formInput"} className={"active"}>New Todo:</label>
            <button onClick={() => {
                onButton(value)
                setValue('')
            }} className="blue darken-3 waves-effect waves-light btn"
                style={{wordSpacing:"5px"}}>add todo
                <i style={{padding: "0 0 0 10px"}} className={"material-icons"}>create</i>
            </button>
        </div>
        <TodoList/>
        </>);
};

export default TodoForm;