function TodoRowItem(todo) {
     
    //Now this data is static we can create variables and assign 
    //them data and pass that variables in json to get data
   // const rowNumber = 1;
   // const rowDescription = 'Feed Dog';
    //const rowAssigned = 'Eric';
    return (
        //Now jsx works in a way that we need to return only 
        //one element here always as in jsx must have only one parent element
        // (In such cases you can wrap elements in div) 
        <tr onClick={() => todo.deleteTodo(todo.rowNumber)}>
        <th scope="row">{todo.rowNumber}</th>
        <td>{todo.rowDescription}</td>
        <td>{todo.rowAssigned}</td>
        </tr>
    )
    
}

export default TodoRowItem