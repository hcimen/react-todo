import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const App = () => { 
  const [newTodo, setNewTodo] = React.useState('');  
  return(  
  <div>
      <h1> Todo List </h1>
        <hr />      
      <AddTodoForm onAddTodo={setNewTodo} />
        <hr />
      <TodoList />
       <hr />
       
      <p>
       {newTodo}
      </p>
  </div>
  );
}

export default App;