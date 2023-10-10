import React from 'react';
import TodoList from './TodoList';

const secret = 'Hello CTD';

const App = () => {
  
  return(
  
  <div>

      <h1> Todo List </h1>

      <TodoList />

      <hr />

        <div>
          {secret}
        </div>
      
      <hr />

  </div>
  )
}

export default App;
