import styled from "styled-components";

const ButtonElement = styled.button`
  background-color: #ffa500;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  min-width: 140px;
  max-width: max-content;
  margin: auto;
`;

const Button = ({ text, onClick }) => {
  return (
    <ButtonElement type="button" onClick={onClick}>
      {text}
    </ButtonElement>
  );
};

export default Button;
