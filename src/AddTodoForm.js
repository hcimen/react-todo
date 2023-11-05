import React from 'react';

const AddTodoForm = (props) => {
    const handleAddTodo = (event) => {
        event.preventDefault();
        let todoTitle = event.target.title.value;
        console.log(todoTitle);
        props.onAddTodo(todoTitle);
        event.target.reset();
    }
    return( 
    <div>
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'> TITLE </label> <br /> <br />
            <input  type='text' id='todoTitle' name='title' />  <br /> <br />
            <button type='submit'> Add  </button>
            <p> Initial commit for Lesson 1-4 </p>
        </form>

    </div>
    );
}

export default AddTodoForm;