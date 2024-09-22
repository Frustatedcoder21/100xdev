import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([{
    id:1,
    title: "Go to gym",
    description: "Need to hit the gym from 7-9PM"
  }, {
    id:2,
    title: "Go to Class",
    description: "Need to go to the class from 4-7 PM"
  }, {
    id:3,
    title: "Eat food",
    description: "Need to eat food from 2-4 PM"
  }])

  return (
    <div>
       {/* whenever we render a array we have to assign them a key here it is a title so that we unqiuely identify the elements , it makes easier for react to understand , if we sort or update the array
       in the below case key is title. */}
      {todos.map(todo => <Todo  key={todo.id} title={todo.title} description={todo.description} />)} 
    </div>
  )
}
//if we change the sequence of todo it can identify it through there id and re-render that specific todo
function Todo({title, description}) { // key is not passed here as a prop
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}

export default App