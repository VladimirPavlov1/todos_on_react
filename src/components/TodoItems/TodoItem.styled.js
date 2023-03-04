import styled from '@emotion/styled';

export const Item = styled.li`
  display: grid;
  grid-template-columns: 50px 1fr 20px;
  justify-content: flex-start;
  align-items: center;
  border: 1px dotted pink;
  margin-bottom: 12px;
  @media (min-width: 768px) {
    grid-template-columns: 50px 1fr 20px;
    margin-bottom: 16px;
  }
`;
export const Checked = styled.input`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 4px;
  left: 4px;
  z-index: 5;
  outline: none;

  -webkit-appearance: none;
  appearance: none;
  :checked + label:after {
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
    filter: alpha(opacity=100);
    opacity: 1;
  }
`;

export const Round = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
  background: pink;
  margin: 10px;

  background: -moz-linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
  background: -o-linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
  background: -ms-linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
  background: linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);

  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;

  -webkit-box-shadow: inset 0px 1px 1px white, 0px 1px 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: inset 0px 1px 1px white, 0px 1px 3px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0px 1px 1px white, 0px 1px 3px rgba(0, 0, 0, 0.5);
  position: relative;
`;
export const LabelChecked = styled.label`
  cursor: pointer;
  position: absolute;
  width: 20px;
  height: 20px;

  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  left: 4px;
  top: 4px;

  -webkit-box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5),
    0px 1px 0px rgba(255, 255, 255, 1);
  -moz-box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5),
    0px 1px 0px rgba(255, 255, 255, 1);
  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5),
    0px 1px 0px rgba(255, 255, 255, 1);

  background: -webkit-linear-gradient(top, #222 0%, #ff33db 100%);
  background: -moz-linear-gradient(top, #222 0%, #45484d 100%);

  background: linear-gradient(top, #222 0%, #45484d 100%);
  ::after {
    filter: alpha(opacity=0);
    opacity: ${props => {
      if (props.checked) {
        return 1;
      }
      return 0;
    }};
    content: '';
    position: absolute;
    width: 9px;
    height: 5px;
    background: transparent;
    top: 5px;
    left: 4px;
    border: 3px solid #fcfff4;
    border-top: none;
    border-right: none;

    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);

    transform: rotate(-45deg);
  }
  :hover::after {
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=30)';
    filter: alpha(opacity=30);
    opacity: 0.3;
  }
`;

export const Text = styled.span`
  display: block;
  width: auto;
  margin-left: 15px;
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const Deletes = styled.span`
  display: block;
  width: 20px;
  height: 20px;

  font-size: 20px;
  font-weight: bold;
`;
