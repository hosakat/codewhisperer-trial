/* eslint-disable react/button-has-type */
import { useState, useMemo } from 'react';
import { Tab, Todo, createTodos, filterTodos } from '../utils/utils'

type TodoListProps = {
  todos: Todo[],
  tab: Tab,
  theme: string
}

// A component that takes todos and tabs and displays the todos filtered by filterTodos
// this component also takes theme that defines component's style
// Avoid costly recalculation and implement them in a way that reduces unnecessary rendering
const TodoList = ({ todos, tab, theme }:TodoListProps) => {
  const filteredTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  return (
    <ul className={theme}>
      {filteredTodos.map(todo => (
        <li key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

const todos = createTodos();

export const TodoListPage = () => {
  const [tab, setTab] = useState('all');
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <button onClick={() => setTab('all')}>
        All
      </button>
      <button onClick={() => setTab('active')}>
        Active
      </button>
      <button onClick={() => setTab('completed')}>
        Completed
      </button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <TodoList
        todos={todos}
        tab={tab}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}

