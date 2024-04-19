import React, {useState} from 'react';
function NewTodoForm(props) {

    //Remember useState return an array of two elements, here we are destructing 
    //that array and setting the initail value of descriptionChange to ''
    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if(description !== '' && assigned !== '') {
            //We need to somehow do addTodo function in App.js and 
            //pass description and assigned to that function
            //props can also be used to pass functions
            props.addTodo(description, assigned);
            //reset to empty state after submit 
            setDescription('');
            setAssigned('');
        }
    }

    //------ onChange function
    // const textChange => (event) {
    //     console.log(event.target.value)
    // }

    return(
        <div className="mt-5">

       <form>
        <div className="mb-3">
            <label className="form-label">Assigned</label>
            <input 
            type="text" 
            className="form-control" 
            required
            onChange={event => setAssigned(event.target.value)}
            value={assigned}>
            </input>
        </div>
        <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea rows={3} 
            className="form-control" 
            required
            onChange={event => setDescription(event.target.value)}
            value={description}
            ></textarea>
        </div>
        <button type='button' className="btn btn-primary" mt-3 onClick={submitTodo}>Add Todo</button>
       </form>
</div>
    )
}

export default NewTodoForm