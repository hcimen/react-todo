import React from 'react';

const AddTodoForm = () => {
    return(
    <div>
        <form>
            <label htmlFor='todoTitle'> TITLE </label> <br /> <br />
            <input type='text' id='todoTitle' value={"Time to add new tasks!"} />  <br /> <br />
            <button type='submit'> Add  </button>
            <button type='submit'> Delete </button> <br /> <br />
        </form>
    </div>
    );
}

export default AddTodoForm;