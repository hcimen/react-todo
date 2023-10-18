import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const App = () => { 
  const [newTodo, setNewTodo] = React.useState('here');  
  return(  
  <div>
      <h1> Todo List </h1>
        <hr />      
      <AddTodoForm onAddTodo={setNewTodo} />
        <hr />
      <TodoList />
       <hr />
       
      <p>
       <strong>{'Your input is  ' + newTodo}</strong>
      </p>
  </div>
  );
}

export default App;