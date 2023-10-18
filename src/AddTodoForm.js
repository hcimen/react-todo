import React from 'react';

const AddTodoForm = (props) => {
    const handleAddTodo = (event) => {
        event.preventDefault();
        let todoTitle = event.target.value;
        console.log(todoTitle);
        onAddTodo(todoTitle);
    }
    return( 
    <div>
        <form>
            <label htmlFor='todoTitle'> TITLE </label> <br /> <br />
            <input onChange={handleAddTodo} type='text' id='todoTitle' name='title' />  <br /> <br />
            <button type='submit'> Add  </button>
        </form>

    </div>
    );
}

export default AddTodoForm;