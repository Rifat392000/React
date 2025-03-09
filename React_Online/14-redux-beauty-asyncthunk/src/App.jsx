import './App.css';
import Posts from './components/Posts';
import { AddTodo, Todos } from "./components"

function App() {
  return (
    <>
      <AddTodo />
      <Todos />
      <Posts />
    </>
  );
}

export default App;
