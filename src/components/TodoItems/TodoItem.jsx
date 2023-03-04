import {
  Checked,
  Round,
  LabelChecked,
  Item,
  Text,
  Deletes,
} from './TodoItem.styled';
import { useDispatch } from 'react-redux';
import { toggleTodos, deleteTodos } from 'redux/TodoSlice/Todoslice';

export const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Round>
        <Checked
          type="checkbox"
          name="checked"
          checked={completed}
          onChange={() => {
            dispatch(toggleTodos({ id }));
          }}
        />
        <LabelChecked htmlFor="cheked"></LabelChecked>
      </Round>
      <Text>{text}</Text>
      <Deletes
        onClick={() => dispatch(deleteTodos({ id }))}
        style={{ color: 'red', cursor: 'pointer' }}
      >
        &times;
      </Deletes>
    </Item>
  );
};
