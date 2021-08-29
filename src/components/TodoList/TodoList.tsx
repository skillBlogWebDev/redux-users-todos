import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const TodoList: React.FC = () => {
  const { page, error, limit, loading, todos } = useTypedSelector(state => state.todo);
  const pages = [1, 2, 3, 4, 5];
  const { fetchTodos, setTodoPage } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
}, [page]);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
}

if (error) {
    return <h1>{error}</h1>;
}

  return (
    <div>
      {todos.map(todo => {
        return <div key={todo.id}>{todo.id} - {todo.title}</div>
      })}
      {pages.map(p => {
        return <div onClick={() => setTodoPage(p)}>{p}</div>
      })}
    </div>
  );
}
