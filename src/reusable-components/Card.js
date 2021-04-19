import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 24px 2px rgba(0, 0, 0, 0.12);
  padding: 1.5rem 2rem;
  border-radius: 5px;
  margin-bottom: 2rem;
  border-left: ${({ isFeatured }) => isFeatured && 'hsl(180, 29%, 50%) solid 4px' };
`;

export default Card;