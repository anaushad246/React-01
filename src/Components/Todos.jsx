import React, { useState } from 'react';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [x, setX] = useState(0);

  const addTodo = () => {
    setX(x + 1);
    setTodos([...todos, `item ${x + 1}`]);
    
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default Todos;

// If the function body is a single expression, you can omit the return keyword and wrap
//  the expression in parentheses (). The value of the expression will be returned implicitly.
// Example:
// javascript
// Copy code
// const add = (a, b) => a + b;
// // Implicitly returns a + b
// Explicit Return:

// If the function body contains more than one expression, you must use curly braces {} 
// and an explicit return statement.
// Example:
// javascript
// Copy code
// const add = (a, b) => {
//   const sum = a + b;
//   return sum;
// };
// // Explicitly returns sum
// Applying to JSX
// When working with JSX in arrow functions, the implicit return can be particularly clean 
// and readable:

// Implicit Return with JSX:

// javascript
// Copy code
// const element = (todo, index) => (<p key={index}>{todo}</p>);
// Here, (<p key={index}>{todo}</p>) is an expression wrapped in parentheses, which is returned implicitly by the arrow function.
// Explicit Return with JSX:

// javascript
// Copy code
// const element = (todo, index) => {
//   return <p key={index}>{todo}</p>;
// };
// In this version, we use curly braces to define the function body and explicitly return the JSX element.