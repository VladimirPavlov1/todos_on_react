import {
  Input,
  Label,
  FieldWrap,
  BtnInput,
  Top,
  Right,
  Bottom,
  Left,
} from './FieldInput.styled';

export const FieldInput = ({ handleChange, text, tapButton }) => {
  return (
    <div>
      <Label>
        Що плануєш робити сьогодні?
        <FieldWrap>
          <Input
            value={text}
            type="text"
            name="text"
            onChange={e => handleChange(e.target.value)}
            placeholder="запиши тут"
          ></Input>
          <BtnInput type="button" onClick={() => tapButton()}>
            <Top></Top>
            <Right></Right>
            <Bottom></Bottom>
            <Left></Left>
            Додай
          </BtnInput>
        </FieldWrap>
      </Label>
    </div>
  );
};
