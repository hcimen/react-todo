import React from 'react';

const TodoListItem = (props) => {
    return(
        <li>
            {props.item.id}. {props.item.todo} - {props.item.due_date} 
        </li>
    )
}

export default TodoListItem;