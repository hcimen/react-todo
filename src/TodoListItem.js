import { directive } from '@babel/types';
import React from 'react';


const TodoListItem = (props) => {
    return(
        <div> 
            <h1> {props.title} </h1>
            <p> {props.number} </p> 
            <li>
            {props.item.id}. {props.item.todo} - {props.item.due_date} 
            </li>
        </div>
    )
}

export default TodoListItem;