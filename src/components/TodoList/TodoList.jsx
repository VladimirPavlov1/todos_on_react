import { TodoItem } from 'components/TodoItems/TodoItem';
import { List } from './TodoList.styled';
import { useSelector } from 'react-redux';

export const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);

  return (
    <List>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </List>
  );
};
