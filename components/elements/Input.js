import styled from "styled-components";

const InputEl = styled.input`
  padding: 4px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 35px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  text-align: left;
  margin-bottom: 4px;
`;

const Input = ({ label, ...props }) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <InputEl {...props} />
    </>
  );
};

export default Input;
