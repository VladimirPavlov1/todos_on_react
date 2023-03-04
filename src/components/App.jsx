import { useState } from 'react';
import { FieldInput } from './FieldInput/FieldInput';
import { TodoList } from './TodoList/TodoList';
import { Container, TodoWrapper } from './App.styled';
import { useDispatch } from 'react-redux';
import { addTodos } from 'redux/TodoSlice/Todoslice';

export const App = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodos({ text }, setText('')));
  };

  return (
    <Container>
      <TodoWrapper>
        <FieldInput text={text} handleChange={setText} tapButton={addTask} />
        <TodoList />
      </TodoWrapper>
    </Container>
  );
};
