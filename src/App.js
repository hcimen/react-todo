import React from 'react';




function App() {
  const todo_list = [
    {
      todo: 'Buy groceries',
      due_date: '2023-10-15',
      priority: 'High',
      contact_person: 'John Smith',
      phone: '123-456-7890',
      email: 'john.smith@example.com',
      id:'1a',
    },
    {
      todo: 'Finish project report',
      due_date: '2023-10-20',
      priority: 'Medium',
      contact_person: 'Alice Johnson',
      phone: '987-654-3210',
      email: 'alice.johnson@example.com',
      id:2,
    },
    {
      todo: 'Go to the gym',
      due_date: '2023-10-17',
      priority: 'Low',
      contact_person: 'David Brown',
      phone: '555-555-5555',
      email: 'david.brown@example.com',
      id:3,
    },
    {
      todo: 'Read a book',
      due_date: '2023-10-25',
      priority: 'Medium',
      contact_person: 'Emily Davis',
      phone: '777-888-9999',
      email: 'emily.davis@example.com',
      id:4,
    },
    {
      todo: 'Pay bills',
      due_date: '2023-10-12',
      priority: 'High',
      contact_person: 'Sarah White',
      phone: '333-222-1111',
      email: 'sarah.white@example.com',
      id:5,
    },
    {
      todo: 'Plan weekend trip',
      due_date: '2023-10-30',
      priority: 'Low',
      contact_person: 'Michael Wilson',
      phone: '999-444-3333',
      email: 'michael.wilson@example.com',
      id:6,
    },
  ];
  return (
    <div style={{ textAlign: 'left' }}>
          <h1> Todo List </h1>
      <ul>
        {todo_list.map(function(item){
          return(
          <li key={item.id}> 
            {item.todo} - {item.due_date} </li>
        )})}
      </ul>

      <hr />
    </div>
    
  );
}

export default App;
