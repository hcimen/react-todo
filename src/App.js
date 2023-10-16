import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const App = () => {  
  return(  
  <div>
      <h1> Todo List </h1>
        <hr />      
      <AddTodoForm />
        <hr />
      <TodoList />
       <hr />
  </div>
  );
}

export default App;