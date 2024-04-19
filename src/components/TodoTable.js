import TodoRowItem from "./TodoRowItem"

// props is a wrapper object for todoList passed from App.js Todotable tag
function TodoTable(props) {
    return (
        <table className = "table table-hover">
            <thead>
                <tr>
                    <th scope ="col">#</th>
                    <th scope ="col">Description</th>
                    <th scope ="col">Assigned</th>
                </tr>
            </thead>
            <tbody>
               
                
            {/* 
            
            Now This a very static way of printing and fetching data from todolist inside todotable
            
            <TodoRowItem 
            rowNumber={props.todosList[0].number} 
            rowDescription={props.todosList[0].description} 
            rowAssigned={props.todosList[0].assigned}
            />
             <TodoRowItem 
            rowNumber={props.todosList[1].number} 
            rowDescription={props.todosList[1].description} 
            rowAssigned={props.todosList[1].assigned}
            />
             <TodoRowItem 
            rowNumber={props.todosList[2].number} 
            rowDescription={props.todosList[2].description} 
            rowAssigned={props.todosList[2].assigned}
            /> */}

{props.todosList.map(todo => (
                    <TodoRowItem
                    key={todo.number}
                    rowNumber = {todo.number}
                    rowDescription = {todo.description}
                    rowAssigned = {todo.assigned}
                    deleteTodo = {props.deleteTodo}
                    />
                ))}
            </tbody>
        </table>

    )
}

export default TodoTable