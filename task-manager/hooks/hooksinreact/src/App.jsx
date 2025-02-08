import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(function(response) {
        setTodos(response.data.todos);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </>
  );
}

function Todo ({ title, description }) {
  return (
    <div>
      <h5>{title}</h5>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default App;
