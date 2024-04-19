import './App.css';
import React, {useState} from 'react';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {


const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  // create a array todoList which hold three todo object
  //----Here we are using destructing to have todolist --> array list 
  //use state is an array which is initial value, and function to update initial value
  //initial value is set in todoList
const [todosList, setTodos] = useState([
  {number:1, description: 'Feed Dog', assigned: 'Eric'},
  {number:2, description: 'Get haircut', assigned: 'Eric'},
  {number:3, description: 'Study React', assigned: 'Eric'}
]);

//const addTodo = () => {
  //console.log("Add New Button clicked")
//}
const addTodo = (description, assigned) => {
  let number = 0;
  if(todosList.length>0) {
    number = todosList[todosList.length - 1].number + 1;
  }
  else {
    number = 1;
  }
    const newTodo = {
      number: number,
      description: description,
      assigned: assigned
    };
    setTodos(todosList => [...todosList, newTodo]);
    //todosList.push(newTodo);
    console.log(todosList);
}

const deleteTodo = (deleteRowNumber) => {
  let filtered = todosList.filter(function(todo) {
     return todo.number !== deleteRowNumber;
  });
  setTodos(filtered);
}


  return (
    <div className='mt-5 container'>
     <div className='card'>
     
      <div className='card-header'>Your Todo's</div>
     
      <div className='card-body'>
        
        {/*-Here we tend to pass todoList variable used inside TodoTable-*/}
        <TodoTable todosList={todosList} deleteTodo={deleteTodo}/>
        <button className= 'btn btn-primary' onClick={() => {setShowAddTodoForm(!showAddTodoForm)}}>
          {showAddTodoForm ? 'Close Todo Form' : 'New Todo'}</button>
        {showAddTodoForm &&  <NewTodoForm addTodo={addTodo}/>}
       
      </div>
     
     </div>
    </div>
  );
}

export default App;
