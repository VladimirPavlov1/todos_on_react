import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 500;
  font-style: italic;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const FieldWrap = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Input = styled.input`
  display: block;
  width: 210px;
  height: 22px;
  font-size: 18px;
  font-style: italic;
  padding: 4px 8px;
  margin-top: 30px;
  border: none;
  border-radius: 8px;
  background-color: pink;
  opacity: 0.5;
  ::placeholder {
    font-size: 18px;
  }
  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const BtnInput = styled.button`
  position: relative;
  overflow: hidden;
  display: block;
  border: none;

  height: 30px;
  width: 85px;
  padding: 6px;
  font-size: 1rem;
  margin-left: 10px;
  transition: 1000ms;
  :hover,
  :active {
    box-shadow: 0 0 16px pink, 0 0 40px pink, 0 0 80px pink;
    background-color: pink;
    color: white;
  }
  :hover span:first-of-type {
    left: 100%;
    transition: 2000ms;
  }

  :hover span:nth-of-type(2) {
    top: 100%;
    transition: 2000ms;
  }

  :hover span:nth-of-type(3) {
    left: -100%;
    transition: 2000ms;
  }
  :hover span:last-of-type {
    bottom: 100%;
    transition: 2000ms;
  }

  @media (min-width: 768px) {
    width: 150px;
    letter-spacing: 2px;
    font-weight: bold;
  }
`;
export const Top = styled.span`
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, pink);
`;
export const Right = styled.span`
  position: absolute;
  right: 0;
  top: -100%;
  width: 2px;
  height: 100%;
  background: linear-gradient(0deg, transparent, pink);
`;
export const Bottom = styled.span`
  position: absolute;
  left: 100%;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, pink, transparent);
`;
export const Left = styled.span`
  position: absolute;
  left: 0;
  bottom: -100%;
  width: 2px;
  height: 100%;
  background: linear-gradient(0deg, transparent, pink);
`;
