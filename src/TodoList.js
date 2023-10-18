import React from 'react';
import TodoListItem from './TodoListItem';

const todo_list = [
    {
      todo: 'Buy groceries',
      due_date: '2023-10-15',
      id:1,
    },
    {
      todo: 'Finish project report',
      due_date: '2023-10-20',
      id:2,
    },
    {
      todo: 'Go to the gym',
      due_date: '2023-10-17',
      id:3,
    },
    {
      todo: 'Read a book',
      due_date: '2023-10-25',
      id:4,
    },
    {
      todo: 'Pay bills',
      due_date: '2023-10-12',
      id:5,
    },
    {
      todo: 'Plan weekend trip',
      due_date: '2023-10-30',
      id:6,
    },
  ];

const TodoList = () => {
    return (
        <ul>
        {todo_list.map((item) => (
          <TodoListItem key={item.id} item={item} title="React Todo" number={1} />
        ))}
      </ul>
    );
}

export default TodoList;