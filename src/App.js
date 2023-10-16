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
       <p> lesson_1_3 </p>
  </div>
  );
}

export default App;