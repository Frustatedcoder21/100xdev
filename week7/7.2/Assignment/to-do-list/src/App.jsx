import { FilterAtom, TodoAtom, TodoListAtom } from "./store/atom/TodoAtom";
import { useRecoilState, RecoilRoot, useRecoilValue } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <Search />
        <InputBox />
      </RecoilRoot>
    </>
  );
}

function InputBox() {
  const [todos, setTodos] = useRecoilState(TodoAtom);

  function handleTitleChange(e) {
    setTodos({ ...todos, title: e.target.value });
  }

  function handleDescriptionChange(e) {
    setTodos({ ...todos, description: e.target.value });
  }

  return (
    <div>
      <label htmlFor="Title">Title :</label>
      <input type="text" value={todos.title} id="Title" onChange={handleTitleChange} />
      <br />
      <label htmlFor="desc">Description :</label>
      <input type="text" value={todos.description} id="desc" onChange={handleDescriptionChange} />
      <List />
    </div>
  );
}

function List() {
  const [todoList, setTodoList] = useRecoilState(TodoListAtom);
  const [todos, setTodos] = useRecoilState(TodoAtom);
  const filter = useRecoilValue(FilterAtom);

  function handleButton() {
    if (todos.title === '' || todos.description === '') {
      alert("Fill the Boxes");
      return;
    }

    setTodoList([...todoList, todos]);
    setTodos({ title: '', description: '' });
  }

  const filteredTodoList = todoList.filter((todo) =>
    todo.title.toLowerCase().includes(filter.toLowerCase()) ||
    todo.description.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <button onClick={handleButton}>Add</button>
      {filteredTodoList.map((todo, index) => (
        <div key={index}>
          <p>{todo.title}</p> <br />
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
}

function Search() {
  const [filter, setFilter] = useRecoilState(FilterAtom);

  function handleChange(e) {
    setFilter(e.target.value);
  }

  return (
    <div>
      <input type="text" value={filter} onChange={handleChange} placeholder="Search todos..." />
    </div>
  );
}

export default App;
