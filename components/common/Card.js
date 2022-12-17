import styled from "styled-components";

const CardContainer = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

const Type = styled.div`
  font-size: 12px;
  color: #888;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const Status = styled.div`
  margin-top: 10px;
  font-size: 14px;
`;

const Card = ({ item }) => {
  return (
    <CardContainer>
      <Type>{item.type}</Type>
      <Title>{item.title}</Title>
      <Status>{item.status}</Status>
    </CardContainer>
  );
};

export default Card;
