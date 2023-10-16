import React from 'react';

const AddTodoForm = () => {
    return(
    <div>
        <form>
            <label htmlFor='todoTitle'> TITLE </label> <br /> <br />
            <input type='text' id='todoTitle'/>  <br /> <br />
            <button type='submit'> Add  </button> <br />
        </form>
    </div>
    );
}

export default AddTodoForm;